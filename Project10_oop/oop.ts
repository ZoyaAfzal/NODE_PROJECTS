#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Student{
    name: string
    constructor(n:string){
        this.name = n
    }
}
class Person{
    Students:Student[] = []

    addStudent(obj:Student){
        this.Students.push(obj)
    }
}
const persons = new Person();

const programStart = async(persons:Person) => {
do{ console.log(chalk.redBright.italic.bold("\n\tWelcome Student!\t\n"));
    const answer = await inquirer.prompt({
        name: "select",
        type: "list",
        message: chalk.yellowBright("With whom would you like to interact?"),
        choices: [chalk.magentaBright("Staff"), chalk.cyan("Student"), chalk.green("Exit")]
    })
    if(answer.select == chalk.magentaBright("Staff")){
        console.log(chalk.bgBlueBright("You have approached the staff room. Please feel free to ask any question..."));

    } else if(answer.select == chalk.cyan("Student")){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: chalk.magentaBright("Please enter the Student's name, you want to engage with:")
        })
        const student = persons.Students.find(val => val.name == ans.student);

        if(!student){
            const name = new Student(ans.student);
            persons.addStudent(name);
            console.log(chalk.yellow(`Hello! I am ${name.name}, hope you are doing great!`));
            console.log(chalk.cyan("New Student added"));
            console.log(chalk.green("Current Students List:"));
            console.log(persons.Students);

        } else {
        console.log(chalk.redBright(`Hello! I am ${student.name}, Nice to see you again!`));
        console.log(chalk.yellow("Existing Students List:"));
        console.log(persons.Students);

    }

    } else if(answer.select == chalk.green("Exit")){
        console.log(chalk.magentaBright("Exiting the program...."));
        process.exit();

    }
}while(true);
};
programStart(persons);