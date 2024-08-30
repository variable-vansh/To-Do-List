// this is kindof a replica of saveNewProject.js

import { displayTaskArray } from "./displayTasksOnProjectPage"

//new stuff
import localStorageManager from './localStorageManager.js';
import { highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray } from "./saveNewProject.js";


//class Task
class Task {

    constructor(taskTitle, taskDescription) {
        this.taskTitle = taskTitle
        this.taskDescription = taskDescription
    }
}

function createNewTask(taskTitle, taskDescription, project) {
    let newTask = new Task(taskTitle, taskDescription);
    project.addTaskToArray(newTask)

    // prints out all the tasks in the current array
    // console.log(project.taskArray)

    displayTaskArray(project)

    //new stuff
    localStorageManager.saveProjects(highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray);
}

export {
    createNewTask
}