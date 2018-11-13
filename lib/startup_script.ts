import { FileSelection } from "./interfaces/file_selection";
import { MantissaSelection } from "./interfaces/mantissa_selection";
import { OperationSelection } from "./interfaces/operation_selection";
import { Scale } from "./interfaces/scale_enum";
import { StartupSelections } from "./interfaces/startup_selections";
// tslint:disable-next-line:no-var-requires
const inquirer = require("inquirer");
// tslint:disable-next-line:no-var-requires
const chalk = require("chalk");
// tslint:disable-next-line:no-var-requires
const figlet = require("figlet");
// tslint:disable-next-line:no-var-requires
const fs = require("fs");

class StartupScript {
    constructor(private operations: string[], private pwd: any) { }

    public async start(): Promise<StartupSelections> {
        try {
            await this.displayTitle();
            const mantissaSelection = await this.askForMantissa();
            const operationSelection = await this.askOperationToPerform();
            const fileSelection = await this.askFileToImport();

            return this.end(mantissaSelection, operationSelection, fileSelection);
        } catch (error) {
            throw error;
        }
    }

    private end(mantissaSelection: MantissaSelection, 
                operationSelection: OperationSelection, 
                fileSelection: FileSelection): StartupSelections {
        return {
            file: fileSelection.file,
            scale: mantissaSelection.mantissa,
            operation: operationSelection.operation
        };
    }

    private async displayTitle(): Promise<void> {
        try {
            console.log(
                chalk.cyanBright(
                  figlet.textSync("Statistics CLI", {
                    font: "Standard",
                    horizontalLayout: "default",
                    verticalLayout: "default"})
                )
              );
        } catch (error) {
            throw error;
        } 
    }

    private async askForMantissa(): Promise<MantissaSelection> {
        try {
            const questions = [
                {
                    type: "list",
                    name: "mantissa",
                    message: "Round results to the nearest:",
                    choices: Object.keys(Scale)
                }
              ];
            return inquirer.prompt(questions);
        } catch (error) {
            throw error;
        }
    }

    private async askOperationToPerform(): Promise<OperationSelection> {
        try {
            const questions = [
                {
                    type: "list",
                    name: "operation",
                    message: "Select which operation to perform:",
                    choices: this.operations
                }
            ];
            return inquirer.prompt(questions);
        } catch (error) {
            throw error;
        }  
    }

    private async askFileToImport(): Promise<FileSelection> {
        try {
            const files: string[] = fs.readdirSync(this.pwd);
            const questions = [
                {
                    type: "list",
                    name: "file",
                    message: "Select which file to import:",
                    choices: files
                }
              ];
            return inquirer.prompt(questions);
        } catch (error) {
            throw error;
        }
    }
}

export {
    StartupScript
};
