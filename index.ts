import { DataImporter } from "./lib/data_importer";
import { listOperations } from "./lib/list_operations";
import { setOperations } from "./lib/set_operations";
import { StartupScript } from "./lib/startup_script";
// tslint:disable-next-line:no-var-requires
const path = require("path");
const pwd = path.dirname(__filename);
const operationsList = listOperations();
const startupScript = new StartupScript(operationsList, pwd);
const dataImporter = new DataImporter();

const start = async () => {
  try {
    const startupSelections = await startupScript.start();

    const file = dataImporter.import(startupSelections.file);
    const operations = setOperations(Number(startupSelections.scale));
    console.log("file", file);
    console.log("operations", operations);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

try {
  start();
} catch (error) {
  console.log(`Could not complete command.`, error);
}
