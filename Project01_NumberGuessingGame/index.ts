#! /usr/bin/env node
import inquirer from "inquirer";

type ansType = {
    userGuess: number
}

async function startFunc(){
    const systemGeneratedNum = Math.floor(Math.random() * 10);
    const answers:ansType = await inquirer.prompt([
        {
            type:"number",
            name:"userGuess",
            message:"Write your guess number and your number must be selected b/w 1 - 10:"
        }


    ])

//console.log(answers.userGuess);


const{userGuess} = answers;
console.log("yourGuess =" , userGuess, "\nsystem'sGuess =" , systemGeneratedNum);

if (userGuess === systemGeneratedNum){
    console.log("Yippie! Your answer is Correct \n You Won!");
}
else{
    console.log("Oooops! Try Again, Better Luck next time!");
}
}

async function startAgain(){
    do{
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to Continue? Press Y or N"
        })
    }
    while(again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes")
}

startAgain();