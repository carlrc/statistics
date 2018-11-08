// tslint:disable-next-line:no-var-requires
const chalk = require("chalk");
// tslint:disable-next-line:no-var-requires
const figlet = require("figlet");

console.log(
  chalk.yellow(
    figlet.textSync("Statistics CLI", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default"})
  )
);
