#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let doContinue = true;
console.log(chalk.cyan.italic("\n\t **Welcome to the Adventurer Game**\t\n"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
}
;
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.yellowBright("Enter Player's Name:")
});
console.log(chalk.blue(player.name));
let opponent = await inquirer.prompt({
    type: "list",
    name: "character",
    message: chalk.red("Select your Opponent:"),
    choices: [chalk.magentaBright("Skeleton"), chalk.greenBright("Assassin"), chalk.cyan("Zombie")]
});
console.log(chalk.magenta(opponent.character));
let p1 = new Player(player.name);
let o1 = new Player(opponent.character);
while (doContinue) {
    if (opponent.character === chalk.magentaBright("Skeleton")) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "action",
            message: chalk.green("Select an Action:"),
            choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
        });
        if (ask.action == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.green(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (o1.fuel <= 0) {
                    console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.action == chalk.blue("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
        }
        if (ask.action == chalk.yellow("Run For Your Life...")) {
            console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));
        }
    }
    ;
    if (opponent.character === chalk.greenBright("Assassin")) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "action",
            message: chalk.green("Select an Action:"),
            choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
        });
        if (ask.action == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.green(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (o1.fuel <= 0) {
                    console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
                    process.exit();
                }
            }
            ;
        }
        ;
        if (ask.action == chalk.blue("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
        }
        if (ask.action == chalk.yellow("Run For Your Life...")) {
            console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));
        }
        ;
    }
    ;
    if (opponent.character === chalk.cyan("Zombie")) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "action",
            message: chalk.green("Select an Action:"),
            choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
        });
        if (ask.action == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.blue(`\t${p1.name} fuel is ${p1.fuel}\t`));
                console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));
                if (o1.fuel <= 0) {
                    console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
                    process.exit();
                }
            }
            ;
        }
        ;
        if (ask.action == chalk.blue("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
        }
        if (ask.action == chalk.yellow("Run For Your Life...")) {
            console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));
        }
        ;
    }
    ;
    const startAgain = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: chalk.cyan("\nDo you want to Continue?\n"),
        default: false
    });
    doContinue = startAgain.continue;
}
;
