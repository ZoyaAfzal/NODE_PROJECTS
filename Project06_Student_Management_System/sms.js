#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let doContinue = true;
console.log(chalk.redBright("\n\t *Welcome to our Institute's Student Management System*\n"));
while (doContinue) {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    let myBalance = 0;
    let studentAnswer = await inquirer.prompt([
        {
            name: "studentName",
            type: "input",
            message: chalk.blue("Enter Student Name:"),
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.red("Please enter a non-empty value");
            },
        },
        {
            name: "courses",
            type: "list",
            message: chalk.greenBright("Please Select any course from our given list of courses to get enrolled"),
            choices: [chalk.yellowBright("Digital Marketing"), chalk.red("Social-Media Marketing"), chalk.blue("Email-Marketing"), chalk.green("Data Analytics"), chalk.magentaBright("Content Marketing")]
        },
    ]);
    const tutionFee = {
        [chalk.yellowBright("Digital Marketing")]: 25000,
        [chalk.red("Social-Media Marketing")]: 20000,
        [chalk.blue("Email-Marketing")]: 15000,
        [chalk.green("Data Analytics")]: 25000,
        [chalk.magentaBright("Content Marketing")]: 18000
    };
    console.log(chalk.yellowBright(`\nTution Fee: ${tutionFee[studentAnswer.courses]}\n`));
    console.log(chalk.cyan(`Balance: ${myBalance}\n`));
    let paymentMethod = await inquirer.prompt([
        {
            name: "payment",
            type: "list",
            message: chalk.red("Please select any Payment Method:"),
            choices: [chalk.blue("Bank Transfer"), chalk.green("EasyPaisa"), chalk.magentaBright("JazzCash")]
        },
        {
            name: "amount",
            type: "input",
            message: chalk.blue("Enter Transfer Amount:"),
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.red("Please enter a non-empty value");
            },
        },
    ]);
    console.log(chalk.cyan(`\n You Select Payment Method: ${paymentMethod.payment}`));
    const tutionFees = tutionFee[studentAnswer.courses];
    const paymentAmount = parseFloat(paymentMethod.amount);
    if (tutionFees === paymentAmount) {
        console.log(chalk.yellowBright(`Congratulations! You have successfully enrolled in ${studentAnswer.courses} Course`));
        let answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.blue("What would you like to do next?"),
                choices: [chalk.green("View Status"), chalk.cyan("Exit")]
            }
        ]);
        if (answer.select === chalk.green("View Status")) {
            console.log(chalk.magentaBright("\n*****Status*****\n"));
            console.log(chalk.red(`StudentName: ${studentAnswer.studentName}`));
            console.log(chalk.yellowBright(`Student ID: ${randomNumber}`));
            console.log(chalk.green(`Course: ${studentAnswer.courses}`));
            console.log(chalk.blue(`Tution Fee Paid: ${paymentAmount}`));
            console.log(chalk.cyan(`Balance: ${myBalance += paymentAmount}`));
        }
        else {
            console.log(chalk.blue("\nExiting Student Management System....."));
        }
    }
    else {
        console.log(chalk.red(`Please enter Correct Amount!`));
    }
    const startAgain = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: chalk.red("\nDo you want to Continue?\n"),
        default: false
    });
    doContinue = startAgain.continue;
}
;
