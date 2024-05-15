#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.magentaBright.italic.bold("\n\t  Welcome to the Countdown Timer...\t\n"));
async function main() {
    const countdown = await inquirer.prompt({
        name: "userAnswer",
        type: "list",
        message: chalk.yellowBright("Select the Countdown Timer:"),
        choices: [chalk.cyanBright("inSeconds"), chalk.greenBright("inMinutes")],
    });
    if (countdown.userAnswer == chalk.cyanBright("inSeconds")) {
        const response = await inquirer.prompt({
            name: "userInput",
            type: "number",
            message: chalk.blue("Please enter the amount of Seconds..."),
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.red("Please enter valid number...");
                }
                else if (input > 60) {
                    return chalk.red("Seconds must be in 60...");
                }
                else {
                    return true;
                }
            },
        });
        let input = response.userInput;
        function startTime(val) {
            const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
            const intervalTime = new Date(initialTime);
            let interval = setInterval(async () => {
                const currentTime = new Date();
                const timeDifference = differenceInSeconds(intervalTime, currentTime);
                if (timeDifference <= 0) {
                    clearInterval(interval);
                    console.log(chalk.cyan("Timer has expired"));
                    const startAgain = await inquirer.prompt({
                        type: "confirm",
                        name: "continue",
                        message: chalk.cyan("Do you want to Continue?"),
                    });
                    if (startAgain.continue) {
                        main();
                    }
                    return;
                }
                const minutes = Math.floor((timeDifference % (3600 * 24)) / 3600);
                const seconds = Math.floor(timeDifference % 60);
                console.log(chalk.magentaBright(`${minutes.toString().padStart(2, "0")} : ${seconds
                    .toString()
                    .padStart(2, "0")}`));
            }, 1000);
        }
        startTime(input);
    }
    else {
        const response = await inquirer.prompt({
            name: "userInput",
            type: "number",
            message: chalk.cyanBright("Please enter the amount of minutes..."),
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.red("Please enter a valid number...");
                }
                else if (input <= 0) {
                    return chalk.red("Minutes must be greater than 0...");
                }
                else {
                    return true;
                }
            },
        });
        let input = response.userInput;
        function startTime(val) {
            const initialTime = new Date().setMinutes(new Date().getMinutes() + val);
            const intervalTime = new Date(initialTime);
            let interval = setInterval(async () => {
                const currentTime = new Date();
                const timeDifference = differenceInSeconds(intervalTime, currentTime);
                if (timeDifference <= 0) {
                    clearInterval(interval);
                    console.log(chalk.cyan("Timer has expired"));
                    const startAgain = await inquirer.prompt({
                        type: "confirm",
                        name: "continue",
                        message: "Do you want to Continue?",
                    });
                    if (startAgain.continue) {
                        main();
                    }
                    return;
                }
                const minutes = Math.floor(timeDifference / 60);
                const seconds = Math.floor(timeDifference % 60);
                console.log(chalk.yellow(`${minutes.toString().padStart(2, "0")} : ${seconds
                    .toString()
                    .padStart(2, "0")}`));
            }, 1000);
        }
        startTime(input);
    }
}
main();
