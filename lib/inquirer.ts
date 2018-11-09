// tslint:disable-next-line:no-var-requires
const inquirer = require("inquirer");

const askStartupQuestions = async () => {
    const questions: any = [
    ];
    return inquirer.prompt(questions);
};
