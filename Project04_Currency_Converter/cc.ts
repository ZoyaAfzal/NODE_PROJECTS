#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bold("\n \t Welcome to Currency-Converter \t \n"));


const Currencies:any={
    USD:1, //Base Currency
    EUR:0.92,
    CAD:1.36,
    AUD:1.52,
    PKR:278.15,
    AED:3.67,
    QAR:3.65,
    OMR:0.385,
    KWD:0.038,
    INR:83.31,
    JPY:152,
    CNY:7.23,
    TRY:32.05,
    GBP:0.79,
    MXN:16.45, 
    HKD:7.83,
    SLR:298,
    BDT:109.50,
    EGP:47.39,
    MAD:10.06

};
async function startFunc(){
let userAnswer = await inquirer.prompt(
    [
        {
            name:"from",
            type:"list",
            message:chalk.blueBright("Enter From Currency:"),
            choices:[ "USD","EUR","CAD","AUD","PKR","AED","QAR","OMR","KWD","INR","JPY","CNY","TRY","GBP","MXN",
            "HKD","SLR","BDT","EGP","MAD" ]
        
        },
        {
            name:"to",
            type:"list",
            message:chalk.blueBright("Enter To Currency:"),
            choices:[ "USD","EUR","CAD","AUD","PKR","AED","QAR","OMR","KWD","INR","JPY","CNY","TRY","GBP","MXN",
            "HKD","SLR","BDT","EGP","MAD" ]
        },
        {
            name:"amount",
            type:"number",
            message:chalk.blueBright("Enter your Amount you want to Convert:")
        }
    ]
)



let fromAmount =Currencies[userAnswer.from]; //Exchange Rates
let toAmount = Currencies[userAnswer.to];    //Exchange Rates
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;         //Base Currency
let convertedAmount = chalk.greenBright(Math.round(baseAmount * toAmount));
console.log(chalk.magentaBright(`Converted Amount: ${convertedAmount}`));
console.log(chalk.redBright(`From ${userAnswer.from} To ${userAnswer.to} : ${Amount} = ${convertedAmount}`));
};
    
async function startAgain(){
    do{
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.greenBright.bold("Do you want to Continue? Press Y or N :")
        })

        
    } while(again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
    
};
startAgain();