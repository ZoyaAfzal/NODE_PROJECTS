#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright("\t Welcome to Word Counter! \t"));
let doContinue = true;
while (doContinue) {
    const Counter = await inquirer.prompt({
        type: "input",
        name: "sentenceOrParagraph",
        message: chalk.blue("Write a sentence or paragraph if you want to know how many words you entered..."),
    });
    const wordCount = Counter.sentenceOrParagraph.trim().split(" ");
    console.log(wordCount);
    if (wordCount.length < 15) {
        console.log(chalk.bgCyan(`Your 'sentence' word count is: ${wordCount.length}`));
    }
    else {
        console.log(chalk.bgBlue(`Your 'paragraph' word count is ${wordCount.length}`));
    }
    const characterCount = Counter.sentenceOrParagraph.trim().replace(/\s/g, "").length;
    console.log(chalk.bgGreen(`Your 'character' count of total words is: ${characterCount}`));
    const startAgain = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: chalk.red("Do you want to Continue?"),
        default: false
    });
    doContinue = startAgain.continue;
}
;
