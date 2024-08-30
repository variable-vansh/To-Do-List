import "../styles/taskPage.css"
import { displayTaskArray } from "./displayTasksOnProjectPage"

import "./newProjectTab.js"
import { createHomeContent } from "./homeContent.js"
import { makeCard } from "./createProjectCard.js";
// import { highPriorityProjectArray } from "./saveNewProject.js";
import { highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray } from "./saveNewProject.js"

import { createNewTask } from "./saveNewTask.js";

///new stuff
import localStorageManager from './localStorageManager.js';

let currentProjectName = ""
// let taskTitle;

function taskPage(project) {
    //remove home content stuff
    let homeContent = document.getElementById("content")
    homeContent.remove()

    //create new task page
    let taskPageParent = document.createElement("div");
    taskPageParent.classList.add("taskPageParent")
    taskPageParent.id = "taskPageParent"
    document.body.appendChild(taskPageParent)

    let taskInputBox = document.createElement("div")
    taskInputBox.classList.add("taskInputBox")
    taskPageParent.appendChild(taskInputBox)

    let taskPageButtons = document.createElement("div")
    taskPageButtons.classList.add("taskPageButtons")
    taskPageParent.appendChild(taskPageButtons)

    let saveTaskPage = document.createElement("button")
    let discardTaskPage = document.createElement("button")
    let deleteProject = document.createElement("button")

    saveTaskPage.classList.add("saveTaskPage")
    discardTaskPage.classList.add("discardTaskPage")
    deleteProject.classList.add("deleteProject")

    saveTaskPage.innerText = "SAVE";
    discardTaskPage.innerText = "RETURN TO HOME"
    deleteProject.innerText = "DELETE PROJECT"

    discardTaskPage.addEventListener("click", function () {
        redirectToHomeContent()
        loadSavedProjectCards()
    })

    taskPageButtons.appendChild(saveTaskPage)
    taskPageButtons.appendChild(discardTaskPage)
    taskPageButtons.appendChild(deleteProject)


    let projectTitleOnTaskPage = document.createElement("div");
    projectTitleOnTaskPage.classList.add("projectTitleOnTaskPage");
    taskInputBox.appendChild(projectTitleOnTaskPage);

    let listOfTasks = document.createElement("div")
    listOfTasks.classList.add("listOfTasks")
    taskInputBox.appendChild(listOfTasks)

    let newTaskSection = document.createElement("div")
    newTaskSection.classList.add("newTaskSection")
    taskInputBox.appendChild(newTaskSection)

    let taskPageFooter = document.createElement("div");
    taskPageFooter.classList.add("taskPageFooter")
    taskInputBox.appendChild(taskPageFooter)

    projectTitleOnTaskPage.innerText = project.projectName
    currentProjectName = project.projectName
    // projectTitleOnTaskPage.innerText = "Dummy Project Name"

    //priority and due date thing in the task page footer
    let priorityOnTaskPage = document.createElement("div");
    priorityOnTaskPage.classList.add("priorityOnTaskPage")
    taskPageFooter.appendChild(priorityOnTaskPage)

    let dueDateOnTaskPage = document.createElement("div")
    dueDateOnTaskPage.classList.add("dueDateOnTaskPage")
    taskPageFooter.appendChild(dueDateOnTaskPage)

    // priorityOnTaskPage.innerText = project.projectPriority
    priorityOnTaskPage.innerText = `Priority: ${project.projectPriority.toUpperCase()}`

    // dueDateOnTaskPage.innerText = project.projectDueDate
    dueDateOnTaskPage.innerText = `Due: ${project.projectDueDate}`

    //new task text in new task section
    let newTaskHeader = document.createElement("div")
    newTaskHeader.classList.add("newTaskHeader")
    newTaskHeader.innerText = "NEW TASK"
    newTaskSection.appendChild(newTaskHeader)

    //design the newTask section
    let taskInputCurvedBorder = document.createElement("div")
    taskInputCurvedBorder.classList.add("taskInputCurvedBorder")
    newTaskSection.appendChild(taskInputCurvedBorder)

    //to put the title and description section inside the curved border box
    let newTaskTitle = document.createElement("input")
    let newTaskDescription = document.createElement("input")

    newTaskTitle.classList.add("newTaskTitle")
    newTaskDescription.classList.add("newTaskDescription")

    newTaskTitle.placeholder = "TITLE"
    newTaskDescription.placeholder = "DESCRIPTION"


    taskInputCurvedBorder.appendChild(newTaskTitle)
    taskInputCurvedBorder.appendChild(newTaskDescription)

    //make delete button work
    deleteProject.addEventListener("click", function () {

        if (project.projectPriority == "high") {
            const index = highPriorityProjectArray.findIndex((p) => p.projectName === currentProjectName);
            if (index !== -1) {
                highPriorityProjectArray.splice(index, 1);
            }
        }

        if (project.projectPriority == "mid") {
            const index = midPriorityProjectsArray.findIndex((p) => p.projectName === currentProjectName);
            if (index !== -1) {
                midPriorityProjectsArray.splice(index, 1);
            }
        }

        if (project.projectPriority == "low") {
            const index = lowPriorityProjectsArray.findIndex((p) => p.projectName === currentProjectName);
            if (index !== -1) {
                lowPriorityProjectsArray.splice(index, 1);
            }
        }

        redirectToHomeContent();
        loadSavedProjectCards();

        //new stuff
        localStorageManager.saveProjects(highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray);
    });

    //save button works only when there is something in the input field
    //make save button work
    saveTaskPage.addEventListener("click", function () {

        //get task title and description to be sent over to create new task
        let taskTitle = document.querySelector(".newTaskTitle").value;
        let taskDescription = document.querySelector(".newTaskDescription").value

        // console.log(taskTitle)
        // console.log(taskDescription)

        if (taskTitle != '' && taskDescription != '') {
            //create new task
            createNewTask(taskTitle, taskDescription, project)
        }

        if (taskTitle == '' && taskDescription == '') {

        }

        //empty the new task input elements
        document.querySelector(".newTaskTitle").value = ""
        document.querySelector(".newTaskDescription").value = ""

        //put the new task up on the task section on the same page
    })



    displayTaskArray(project)



}

//removes whatever's on the page, insert content thing from homContent
function redirectToHomeContent() {
    let taskPageParent = document.getElementById("taskPageParent")
    taskPageParent.remove()

    //create content element
    const content = document.createElement("div");
    content.classList.add("content");
    content.id = "content";

    document.body.appendChild(content);

    //create Home page content
    createHomeContent(content);
}

function loadSavedProjectCards() {
    // let priorityHigh = document.getElementById("priorityHigh");
    // let priorityMid = document.getElementById("priorityMid");
    // let priorityLow = document.getElementById("priorityLow");


    makeCard()
}


export { taskPage }