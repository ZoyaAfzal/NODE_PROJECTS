#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let doContinue = true;



async function createTodoList(todos: string[]){
    while(doContinue){
        let answer = await inquirer.prompt({
            type:"list",
            name:"Select",
            message:"What Operation do you want to perform?",
            choices:["AddItems", "UpdateItems","ViewItems", "DeleteItems"]
    });
if(answer.Select == "AddItems"){
    let addTodo = await inquirer.prompt({
        type:"input",
        name:"Todo",
        message:"What item you want to add in your Todo?..."
    });
    todos.push(addTodo.Todo);
    let addMoreTodo = await inquirer.prompt({
        type:"input",
        name:"moreTodo",
        message:"What more item you want to add in Todo?....",
    });
    todos.push(addMoreTodo.moreTodo);
    console.log(todos);
}

if(answer.Select == "UpdateItems"){
    let updateTodo = await inquirer.prompt({
        type:"list",
        name:"update",
        message:"Select an item you want to Update?...",
        choices:todos.map(item => item)
    });
    let addTODO = await inquirer.prompt({
        type:"input",
        name:"updateTodo",
        message:"Add item you want to Update...",
    });

    let newTodos = todos.filter(val => val !== updateTodo.update);
    todos = [...newTodos, addTODO.updateTodo];
    console.log(todos);
}

if(answer.Select == "ViewItems"){
    console.log("Todos List: ", todos);
}
    
if(answer.Select == "DeleteItems"){
    let deleteTodo = await inquirer.prompt({
        type:"list",
        name:"todo",
        message:"What item you want to delete in Todo?",
        choices:todos.map(item => item),
        default:false
    });
    let newTodos = todos.filter(val => val !== deleteTodo.todo);
    todos=[...newTodos];
    console.log(todos);
}
}

}
createTodoList(todos);