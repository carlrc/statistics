// tslint:disable-next-line:no-var-requires
const inquirer = require("inquirer");

const askOperationToPerform = async (operations: string[]) => {
    const questions = [
        {
            type: "list",
            name: "operation",
            message: "Select which operation to perform:",
            choices: operations
        }
      ];
    return inquirer.prompt(questions);
};

export {
    askOperationToPerform
};
