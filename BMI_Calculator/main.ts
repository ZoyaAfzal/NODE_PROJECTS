import inquirer from "inquirer";
import chalk from "chalk";

async function calculator(){
    let{weightInKg,heightInMeter} = await inquirer.prompt([
        {
            type: "input",
            name: "weightInKg",
            message: chalk.green("Enter your weight in kgs: \n")
        },
        {
            type: "input",
            name: "heightInMeter",
            message: chalk.blue("Enter your height in meters: \n")
        }
    ])
    const bodyMassIndex = weightInKg / (heightInMeter * heightInMeter);
    console.log(chalk.yellow(bodyMassIndex));

if(bodyMassIndex <= 18.5){
    console.log(chalk.blue(`Your BMI is ${bodyMassIndex}. Congrats! you are Underweight... `));
} 
else if(bodyMassIndex <= 25){ 
    console.log(chalk.green(`Your BMI is ${bodyMassIndex}. You are Normal... `));
}
else if(bodyMassIndex <= 30){
    console.log(chalk.yellow(`Your BMI is ${bodyMassIndex}. Sorry! you are Overweight... `));
}
else{
    console.log(chalk.red("Don't mind but you are Hugely Obese... "));
}
    
}

await calculator();






    