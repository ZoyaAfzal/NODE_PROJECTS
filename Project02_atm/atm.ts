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
//atmOperations(user);


if(user){
    
    console.log(`You have entered correct Pin number, Welcome ${user.name}!`); 
    atmOperations(user);

} else {
    console.log("Invalid User pin");

} 


}

const atmOperations = async(user: User) => {
    const answer = await inquirer.prompt({
        type:"list",
        name:"Select",
        message:"What Operation you want to perform?",
        choices:["Withdraw", "BalanceCheck", "Deposit"],
    })

if(answer.Select === "Withdraw"){
    const amount = await inquirer.prompt({
        type:"list",
        name:"rupeeAmount",
        message:"Enter Withdraw Amount:",
        choices:["10000", "20000", "30000", "40000","50000"],
    })

if(amount.RupeeAmount === amount.choices){
    console.log(`Your withdrawal amount is: ${amount.rupeeAmount}`);
    console.log(`Your remaining balance is: ${user.balance - amount.rupeeAmount}`);

} else if(amount.rupeeAmount > "50000"){
    console.log("Sorry! You cannot withdraw amount more than 40000!");

} else if(amount.rupeeAmount > user.balance){
    console.log("Sorry! you have Insufficient Balance for this transaction...");
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
if(deposit.cash >= "5000"){
    console.log(`Deposit Amount: ${deposit.cash} , Your amount has been deposited successfully...`);
} else {
    console.log("You can't deposit less than 5000");
}
}

};



console.log(users);
atmMachine(users);


