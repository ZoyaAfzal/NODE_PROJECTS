#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.italic.bold("\n\t  **Welcome to myBank Services**  \n\t"));
class Customer {
    firstname;
    lastname;
    age;
    gender;
    mobilenumber;
    accountnumber;
    constructor(firstName, lastName, age, gender, mobilenumber, accountnumber) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
        this.gender = gender;
        this.mobilenumber = mobilenumber;
        this.accountnumber = accountnumber;
    }
}
;
;
class BankAccount {
    accountNumber;
    accountBalance;
    constructor(accountNumber, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    withdraw(amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            console.log(chalk.magentaBright(`Withdrawal of ${amount} successful.`));
            console.log(chalk.greenBright(`Remaining balance is $${this.accountBalance}.`));
        }
        else {
            console.log(chalk.redBright("You have Insufficient Balance for this transaction"));
        }
    }
    ;
    deposit(amount) {
        if (amount > 100) {
            amount -= 1;
        }
        this.accountBalance += amount;
        console.log(chalk.blue(chalk.magentaBright(`Deposit of amount ${amount} successful.`)));
        console.log(chalk.blue(chalk.cyanBright(`Remaining Balance is $${this.accountBalance}`)));
    }
    ;
    checkBalance() {
        console.log(chalk.yellowBright(`Your Current Balance is $${this.accountBalance}`));
    }
    ;
}
;
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];
const customers = [
    new Customer("Muhammad", "Afzal", 40, "Male", 3002121212, accounts[0]),
    new Customer("Sarah", "Khan", 25, "Female", 3003131313, accounts[1]),
    new Customer("Shan", "Gul", 30, "Male", 3004141414, accounts[2])
];
let doContinue = true;
async function services() {
    while (doContinue) {
        const accNumber = await inquirer.prompt({
            name: "accountnum",
            type: "number",
            message: chalk.magentaBright("Enter your Account Number:")
        });
        const customer = customers.find(customer => customer.accountnumber.accountNumber === accNumber.accountnum);
        if (customer) {
            console.log(chalk.red(`Welcome, ${customer.firstname} ${customer.lastname}!\n`));
            const answer = await inquirer.prompt({
                name: "select",
                type: "list",
                message: chalk.greenBright("Select an operation you want to perform:"),
                choices: [chalk.magentaBright("Deposit"), chalk.greenBright("Withdraw"), chalk.blue("CheckBalance"), chalk.red("Exit")]
            });
            switch (answer.select) {
                case chalk.magentaBright("Deposit"):
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: chalk.blue("Enter the Deposit Amount:")
                    });
                    customer.accountnumber.deposit(depositAmount.amount);
                    break;
                case chalk.greenBright("Withdraw"):
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: chalk.cyan("Enter the Withdraw Amount:")
                    });
                    customer.accountnumber.withdraw(withdrawAmount.amount);
                    break;
                case chalk.blue("CheckBalance"):
                    customer.accountnumber.checkBalance();
                    break;
                case chalk.red("Exit"):
                    console.log(chalk.blue("Exiting Bank program......"));
                    console.log(chalk.yellowBright("\nThank you for using our bank services. Have a good day!"));
                    return;
            }
            ;
        }
        else {
            console.log(chalk.redBright("Invalid Account Number!!! Please Try Again!"));
        }
        ;
        const startAgain = await inquirer.prompt({
            type: "confirm",
            name: "continue",
            message: chalk.red("Do you want to Continue?"),
            default: false
        });
        doContinue = startAgain.continue;
    }
    ;
}
;
services();
