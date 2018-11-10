// tslint:disable-next-line:no-var-requires
const inquirer = require("inquirer");

const askForFileToImport = async (fileNames: string[]) => {
    const questions = [
        {
            type: "list",
            name: "file",
            message: "Select which file to import:",
            choices: fileNames
        }
      ];
    return inquirer.prompt(questions);
};

export {
    askForFileToImport
};
