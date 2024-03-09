#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculation");
  await sleep();
  rainbowTitle.stop();
  let colorCal = chalk.cyanBright(`
  _____________________
 |  _________________  |
 | | JO           0. | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|
 
      `)
   console.log(colorCal)
 
 }


await welcome();


const sleep2 = ()=>{
  return new Promise((res)=>
  setTimeout(res,2000)
  )

  
}

async function welcome2() {
   let creatorName = chalkAnimation.rainbow("created by Zoya Afzal");
    await sleep2()
    creatorName.stop()
    
  }



await welcome2();




async function askQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: chalk.red("Enter the first number:"),
    },

    {
      type: "number",
      name: "num2",
      message: chalk.red("Enter the second number:"),
    },

    {
      type: "list",
      name: "operator",
      message: chalk.blue("Selector the Operation you would like to perform? \n"),
      choices: [(chalk.blue("Addition")), (chalk.green("Subtraction")), (chalk.red("Multiplication")), (chalk.yellow("Division"))]
    },
  ])

  

  if (answers.operator == chalk.blue("Addition")){
    console.log(chalk.blue(
      `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)

      );
  }
    
  else if(answers.operator == chalk.green("Subtraction")){
      console.log(chalk.green(
        `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
      );

  }

  else if (answers.operator == chalk.red("Multiplication")) {
    console.log(chalk.red(
      `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
    );
  }

   else if (answers.operator == chalk.yellow("Division")) {
    console.log(chalk.yellow(
      `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
    );
  }
}


async function startAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: chalk.grey("Do you want to Continue? Press y or n"),
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES"
  )
}

startAgain();

