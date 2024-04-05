#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let doContinue = true;
async function createTodoList(todos) {
    while (doContinue) {
        let answer = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: chalk.blue("What Operation do you want to perform?"),
            choices: [chalk.blue("AddItems"), chalk.green("UpdateItems"), chalk.red("ViewItems"), chalk.yellow("DeleteItems")]
        });
        if (answer.Select == chalk.blue("AddItems")) {
            let addTodo = await inquirer.prompt([{
                    type: "input",
                    name: "Todo",
                    message: chalk.blue("What item you want to add in your Todo?...")
                }]);
            todos.push(addTodo.Todo);
            let moreTodoQuestion = await inquirer.prompt([{
                    type: "list",
                    name: "AskMoreTodo",
                    message: chalk.red("Would you like to add more in your todos?"),
                    choices: [chalk.green("Yes"), chalk.red("No")]
                }]);
            if (moreTodoQuestion.AskMoreTodo == chalk.green("Yes")) {
                let addMoreTodo = await inquirer.prompt({
                    type: "input",
                    name: "moreTodo",
                    message: chalk.blue("What more item you want to add in Todo?...."),
                });
                if (addMoreTodo.moreTodo.trim() === "") {
                }
                else {
                    todos.push(addMoreTodo.moreTodo);
                    console.log(todos);
                }
                ;
            }
            ;
        }
        ;
        if (answer.Select == chalk.green("UpdateItems")) {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "update",
                message: chalk.green("Select an item you want to Update?..."),
                choices: todos.map(item => item)
            });
            let addTODO = await inquirer.prompt({
                type: "input",
                name: "updateTodo",
                message: chalk.red("Add item you want to Update..."),
            });
            let newTodos = todos.filter(val => val !== updateTodo.update);
            todos = [...newTodos, addTODO.updateTodo];
            console.log(todos);
        }
        ;
        if (answer.Select == chalk.red("ViewItems")) {
            console.log(chalk.red("Todos List: "), todos);
        }
        ;
        if (answer.Select == chalk.yellow("DeleteItems")) {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: chalk.yellow("What item you want to delete in Todo?"),
                choices: todos.map(item => item),
                default: false
            });
            if (deleteTodo.todo.trim() === "") {
            }
            else {
                let newTodos = todos.filter(val => val !== deleteTodo.todo);
                todos = [...newTodos];
                console.log(todos);
            }
            ;
        }
        ;
    }
    ;
}
;
createTodoList(todos);
