import { DataImporter } from "./lib/data_importer";
import { listOperations, listScales } from "./lib/list_startup_options";
import { setOperations } from "./lib/set_operations";
import { StartupScript } from "./lib/startup_script";
// tslint:disable-next-line:no-var-requires
const path = require("path");
const pwd = path.dirname(__filename);
const operationsList = listOperations();
const scalesList = listScales();
const startupScript = new StartupScript(operationsList, scalesList, pwd);
const dataImporter = new DataImporter();

const start = async () => {
  try {
    const startupSelections = await startupScript.start();
    const file = await dataImporter.import(pwd, startupSelections.file);
    const operations = setOperations(Number(startupSelections.scale));

    return await operations.get(startupSelections.operation).calculate(file);
  } catch (error) {
    console.log("General Error", error);
    throw error;
  }
};

start()
.then((result) => {
    console.log("Result", result);
})
.catch((error) => {
    console.log(`Could not complete command.`, error);
});
