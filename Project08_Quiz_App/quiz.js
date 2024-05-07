#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.italic.bold("\n\t''''Welcome to the Quiz App''''\t\n"));
const apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let apiData = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    let userName = await inquirer.prompt({
        type: "input",
        name: "username",
        message: chalk.blue.bold("What is your Name?")
    });
    for (let i = 1; i < 6; i++) {
        let answers = [...apiData[i].incorrect_answers, apiData[i].correct_answer];
        let answer = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: chalk.redBright(apiData[i].question),
            choices: answers.map((val) => val)
        });
        if (answer.quiz == apiData[i].correct_answer) {
            ++score;
            console.log(chalk.yellowBright.bold("Correct"));
        }
        else {
            console.log(chalk.magentaBright.bold(`Correct answer is ${apiData[i].correct_answer}`));
        }
    }
    ;
    console.log(chalk.cyanBright.bold.italic(`\n\tDear ${userName.username}, your score is ${score} out of ${'5'}\t\n`));
};
async function startAgain() {
    do {
        await startQuiz();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.greenBright.bold("Do you want to Continue? Press Y or N :")
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
;
startAgain();
