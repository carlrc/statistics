// tslint:disable-next-line:no-var-requires
const chalk = require("chalk");
// tslint:disable-next-line:no-var-requires
const figlet = require("figlet");
// tslint:disable-next-line:no-var-requires
const fs = require("fs");
// tslint:disable-next-line:no-var-requires
const path = require("path");
import { askForFileToImport } from "./lib/ask_file_to_import";
import { askOperationToPerform } from "./lib/ask_operation_to_perform";
import { FileSelection } from "./lib/interfaces/file_selection";
import { Input } from "./lib/interfaces/input";
import {listOperations} from "./lib/list_operations";

console.log(
  chalk.cyanBright(
    figlet.textSync("Statistics CLI", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default"})
  )
);

const importData = async (): Promise<Input> => {
  const pwd = path.dirname(__filename);
  const files: string[] = fs.readdirSync(pwd);
  const fileSelection: FileSelection = await askForFileToImport(files);
  const data = fs.readFileSync(fileSelection.file);

  return JSON.parse(data);
};

const start = async () => {
  const input: Input = await importData();
  const operations = listOperations();
  const operation: string = await askOperationToPerform();
};

start();
// import file

// select function

// 
