#! /usr/bin/env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

interface User{
    id: number
    pin: number
    name: string
    accountNumber: number
    balance: number
}

const createUser=() => {
    let users:User[] = []
    for(let i=0 ; i<5 ; i++){
        let user:User = {
            id: i,
            pin:1230 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 50000000),
            balance:100000 * i

        }
        users.push(user)
    }
    return users
}
const users = createUser();


const atmMachine = async (users: User[]) => {
    const pinAnswer = await inquirer.prompt({
        type:"number",
        message:"Enter your PinNumber:",
        name: "pin",

    })


const user = users.find(val => val.pin  ===  pinAnswer.pin) 

if(user){
    
    console.log(`You have entered correct Pin number, Welcome ${user.name}!`); 
    await atmOperations(user);

} else {
    console.log("Invalid User pin");

} 


}

const atmOperations = async(user: User) => {
    const answer = await inquirer.prompt({
        type:"list",
        name:"Select",
        message:"What Operation you want to perform?",
        choices:["Withdraw", "FastCash", "BalanceCheck", "Deposit"],
    })
    if(answer.Select === "Withdraw"){
        const withdrawAmount = await inquirer.prompt({
            type:"input",
            name:"withdraw",
            message:"Please enter the amount you want to Withdraw:",
        })
    if(withdrawAmount.withdraw < "50000"){
        user.balance = user.balance-withdrawAmount.withdraw;
        console.log("Your amount has withdrawn successfully...")
        console.log(`Your remaining balance is ${user.balance}`);
    } else {
        console.log("You cannot Withdraw more than 50000!");
    }
    }



if(answer.Select === "FastCash"){
    const fastCashAmount = await inquirer.prompt({
        type:"list",
        name:"fastCash",
        message:"Enter FastCash Amount:",
        choices:["10000", "20000", "30000", "40000","50000"],
    })


if(fastCashAmount.fastCash < user.balance){
    user.balance = user.balance-fastCashAmount.fastCash

    console.log(`Your fastCashwithdrawal amount is: ${fastCashAmount.fastCash}`);
    console.log(`Your remaining balance is: ${user.balance}`);

}  else {
    console.log("Sorry! you have Insufficient Balance for this Transaction...");
}

}

if(answer.Select === "BalanceCheck"){
    console.log(`Your Current Balance is: ${user.balance}`);
}


if(answer.Select === "Deposit"){
    const deposit = await inquirer.prompt({
        type:"number",
        name:"cash",
        message:"Please enter Deposit Amount:"

    })
if(deposit.cash >= "10000"){
    user.balance = user.balance+deposit.cash;
    console.log(`Deposit Amount: ${deposit.cash} , Your amount has been deposited successfully...`);
    console.log(`Your Current Balance is: ${user.balance}`);
} else {
    console.log("You can't deposit less than 10000");
}
}

};

async function startAgain() {
    do {
        await atmMachine(users);
        var again = await inquirer.prompt({
            type:"input",
            name:"restart",
            message:"Do you want to Continue? Press y or n:"
        });
    } while(
        again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES"
    )
}



console.log(users);


startAgain();