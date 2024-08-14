let taskCounter = 0;
taskArray = [];

class Task {
    // a todo item has: title, description, dueDate, priority
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskNumber = taskCounter + 1;
        taskCounter++;
    }

    viewTasks() {
        console.log(`Task number: ${this.taskNumber}`)
        console.log(`Title: ${this.title}`)
        console.log(`Description: ${this.description}`)
        console.log(`Due Date: ${this.dueDate}`)
        console.log(`Priority: ${this.priority}`)
    }
}

taskArray.push(new Task("<demo title>", "<demo description>", "<demo due date>", "<demo priority>"))
taskArray.push(new Task("<demo title 2>", "<demo description>", "<demo due date>", "<demo priority>"))
taskArray.push(new Task("<demo title 3>", "<demo description>", "<demo due date>", "<demo priority>"))

// const task1 = new Task("<demo title>", "<demo description>", "<demo due date>", "<demo priority>");
for (let task of taskArray) {
    task.viewTasks();
    console.log("----------------------------------------")
}

















//this was just a demo import to test webpack setup
// import _ from 'lodash';
// alert(_.join(['lol', 'idk'], '-'))
// i changed code in my index.js file from src folder, but it got moved to main.js of dist as the program was instructed to do so by webpack.config.js
