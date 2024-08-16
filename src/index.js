//import style for home page
// import "./styles/homeStyle.css"

import { header } from "./scripts/homeHeader"
import { content } from "./scripts/homeContent"

//creates tasks
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskNumber = ++Task.taskCounter;
    }

    // shows up task in console
    viewTasks() {
        console.log(`Task number: ${this.taskNumber}`);
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
    }

    //resets tasks counter to 0
    static resetTaskCounter() {
        Task.taskCounter = 0;
    }
}

// initialize counter to be 0
Task.taskCounter = 0;

//create projects
class Project {
    //takes in task Array
    constructor(tasks, projectName) {
        // creates a copy of tasks array and keeps it
        this.tasks = [...tasks];
        this.projectNumber = ++Project.projectCounter;
        this.projectName = projectName;
    }

    //show up projects in console
    viewProject() {
        console.log(`Project-${this.projectName}`);
        //run a loop for each task in the tasks array ('twas created in the constructor, as a copy of the tasks array)
        this.tasks.forEach(task => task.viewTasks());
        console.log("-------------------------------------");
    }

    //takes in a new task and pushes it into this projects array that is a collection of tasks in this project
    addTaskToProject(newTask) {
        this.tasks.push(newTask);
    }
}

Project.projectCounter = 0;

//parent, single biggest collection of projects
class ProjectCollection {
    //takes in array of projects
    constructor(projects) {
        //stores up an array, an array of all projects
        this.projects = projects;
    }

    //loops over all projects and shows them up
    viewProjectCollection() {
        this.projects.forEach(project => project.viewProject());
    }

    //takes in a new project object, and adds it to the array of all projects
    addNewProjectToCollection(newProject) {
        this.projects.push(newProject);
    }
}

//initialize task array
// let taskArray = [];

// //usage via button
// const addTask = document.querySelector("#newTask");

// let projectCollection;
// let currentProject;

// addTask.onclick = function () {
//     //stores all the repetetive document.query... 
//     const inputs = createInputQuerySelectors();

//     // Create or update the project
//     if (!projectCollection) {
//         const firstProject = new Project([], inputs.projectName.value);
//         projectCollection = new ProjectCollection([firstProject]);
//     } else {
//         projectCollection.projects[0].projectName = inputs.projectName.value;
//     }

//     // Create the new task
//     const newTask = new Task(
//         inputs.titleInput.value,
//         inputs.descriptionInput.value,
//         inputs.dueDateInput.value,
//         inputs.priorityInput.value
//     );

//     //add the new task to the first project
//     projectCollection.projects[0].addTaskToProject(newTask);

//     //add the new task to given project


//     console.clear();
//     projectCollection.viewProjectCollection();

//     resetInputBoxes(inputs);
// }

// // query selector used in newTask event handler
// function createInputQuerySelectors() {
//     return {
//         titleInput: document.querySelector("#title"),
//         descriptionInput: document.querySelector("#description"),
//         dueDateInput: document.querySelector("#dueDate"),
//         priorityInput: document.querySelector("#priority"),
//         projectName: document.querySelector("#projectName")
//     };
// }

// // resets input boxes after their content is used up to create new Task
// function resetInputBoxes(inputs) {
//     inputs.titleInput.value = ""
//     inputs.descriptionInput.value = ""
//     inputs.dueDateInput.value = ""
//     inputs.priorityInput.value = ""
//     inputs.projectName.value = ""
// }


// //create a project
// const firstProject = new Project(taskArray, document.querySelector("#projectName").value);

// // const addProject = document.querySelector("#newProject");

// // addProject.onclick = function () {
// //     const newProject = new Project(taskArray, document.querySelector("#projectName").value);
// //     projectCollection.addNewProjectToCollection(newProject)
// // }