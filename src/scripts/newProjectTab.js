import { create } from "lodash";
import "../styles/newProjectTab.css"
import { createHomeContent } from "./homeContent.js"
import { createNewProject } from "./saveNewProject.js"
import { makeCard } from "./createProjectCard.js";
import { highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray } from "./saveNewProject.js"


let projectName, projectPriority, projectDueDate;

function newProjectInput() {

    let homeContent = document.getElementById("content")
    homeContent.remove()

    createProjectInputBox();
}

function createProjectInputBox() {
    let projectContent = document.createElement("div");
    projectContent.classList.add("projectContent");
    projectContent.id = "projectContent"
    document.body.appendChild(projectContent)

    let projectInputBox = document.createElement("div")
    let projectButtons = document.createElement("div");

    projectInputBox.classList.add("projectInputBox")
    projectButtons.classList.add("projectButtons")

    projectContent.appendChild(projectInputBox)
    projectContent.appendChild(projectButtons)

    let projectSaveBtn = document.createElement("button");
    let projectDiscardBtn = document.createElement("button");

    projectSaveBtn.classList.add("projectSaveBtn")
    projectDiscardBtn.classList.add("projectDiscardBtn")

    projectSaveBtn.innerText = "SAVE"
    projectDiscardBtn.innerText = "DISCARD"

    projectButtons.appendChild(projectSaveBtn)
    projectButtons.appendChild(projectDiscardBtn)

    //create stuff inside main input box
    let projectNameInput = document.createElement("input");
    projectNameInput.classList.add("projectNameInput")
    projectNameInput.placeholder = "ENTER NEW PROJECT NAME HERE"
    projectInputBox.appendChild(projectNameInput)

    //creates radio input for priority
    createPriorityInput(projectInputBox)

    //creates date input for due date
    createDueDateInput(projectInputBox)

    //make the discard button redirect to homeContent
    projectDiscardBtn.addEventListener("click", function () {
        redirectToHomeContent()
        loadSavedProjectCards()
    })

    //make save button do stuff
    //save the three inputs and send them to saveNewProject.js to create new project
    projectSaveBtn.addEventListener("click", function () {
        //get input values to be sent over to create new project
        projectName = document.querySelector('.projectNameInput').value;
        projectDueDate = document.querySelector('.dateInput').value;

        //create new project
        createNewProject(projectName, projectPriority, projectDueDate);

        //redirect to home content page
        redirectToHomeContent()

        //load saved project cards on the home content page
        loadSavedProjectCards()

    });
}

function createPriorityInput(projectInputBox) {

    //one blanket div that contains all this stuff
    let radioInput = document.createElement("div");
    radioInput.classList.add("radioInput")
    projectInputBox.appendChild(radioInput)

    //heading thing
    let priorityLabelText = document.createElement("p");
    priorityLabelText.classList.add("priorityLabelText");
    priorityLabelText.innerText = "Enter the project priority:";
    radioInput.appendChild(priorityLabelText)

    // create 3 inputs
    let priorityHighInput = document.createElement("input")
    let priorityMidInput = document.createElement("input")
    let priorityLowInput = document.createElement("input")

    //add respective class to all, and one common class to all 3
    priorityHighInput.classList.add("priorityHighInput", "priorityInput")
    priorityMidInput.classList.add("priorityMidInput", "priorityInput")
    priorityLowInput.classList.add("priorityLowInput", "priorityInput")

    //set their type to radio
    priorityHighInput.setAttribute("type", "radio")
    priorityMidInput.setAttribute("type", "radio")
    priorityLowInput.setAttribute("type", "radio")

    //set value to high, mid, low
    priorityHighInput.setAttribute("value", "high")
    priorityMidInput.setAttribute("value", "mid")
    priorityLowInput.setAttribute("value", "low")

    //add id to all
    priorityHighInput.setAttribute("id", "high")
    priorityMidInput.setAttribute("id", "mid")
    priorityLowInput.setAttribute("id", "low")

    //event listener to each option that calls a function to store the chosen value
    priorityHighInput.addEventListener('change', updatePriority);
    priorityMidInput.addEventListener('change', updatePriority);
    priorityLowInput.addEventListener('change', updatePriority);

    // Add the same name to all radio inputs
    const radioGroupName = "priority";
    priorityHighInput.setAttribute("name", radioGroupName)
    priorityMidInput.setAttribute("name", radioGroupName)
    priorityLowInput.setAttribute("name", radioGroupName)

    //create labels
    let highLabel = document.createElement("label")
    let midLabel = document.createElement("label")
    let lowLabel = document.createElement("label")

    //set "for" attribute to the correct id
    highLabel.setAttribute("for", "high")
    midLabel.setAttribute("for", "mid")
    lowLabel.setAttribute("for", "low")

    //set inner text
    highLabel.innerText = "High"
    midLabel.innerText = "Mid"
    lowLabel.innerText = "Low"

    //finnaly append them to the main page
    radioInput.appendChild(priorityHighInput)
    radioInput.appendChild(highLabel)
    radioInput.appendChild(createBreak())

    radioInput.appendChild(priorityMidInput)
    radioInput.appendChild(midLabel)
    radioInput.appendChild(createBreak())

    radioInput.appendChild(priorityLowInput)
    radioInput.appendChild(lowLabel)
    radioInput.appendChild(createBreak())
}

//i want break after each label and input, write it once and use it at multiple places
function createBreak() {
    let breakElement = document.createElement("br")
    breakElement.classList.add("breakElement")
    return breakElement;
}

function createDueDateInput(projectInputBox) {

    //little container for all date input stuff
    let dueDateInput = document.createElement("div")
    dueDateInput.classList.add("dueDateInput")
    projectInputBox.appendChild(dueDateInput)

    //label for due date
    let dueDateLabel = document.createElement("label")
    dueDateLabel.classList.add("dueDateLabel")
    dueDateLabel.innerText = "Enter Due Date"
    dueDateLabel.setAttribute("for", "dueDate")
    dueDateInput.appendChild(dueDateLabel)

    //input element 
    let dateInput = document.createElement("input")
    dateInput.classList.add("dateInput")
    dateInput.setAttribute("type", "date")
    dateInput.setAttribute("id", "dueDate")
    dueDateInput.appendChild(dateInput)

}

//removes whatever's on the page, insert content thing from homContent
function redirectToHomeContent() {
    let projectContent = document.getElementById("projectContent")
    projectContent.remove()

    //create content element
    const content = document.createElement("div");
    content.classList.add("content");
    content.id = "content";

    document.body.appendChild(content);


    //create Home page content
    createHomeContent(content);
}

//function stores the chosen radio input value
function updatePriority(event) {
    projectPriority = event.target.value;
}

function resetPriorityInput() {
    const radioButtons = document.querySelectorAll('input[name="priority"]');
    radioButtons.forEach(button => {
        button.checked = false;
    });
    projectPriority = undefined; // Reset the global variable
}

function loadSavedProjectCards() {
    let priorityHigh = document.getElementById("priorityHigh");
    let priorityMid = document.getElementById("priorityMid");
    let priorityLow = document.getElementById("priorityLow");

    for (let project of highPriorityProjectArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityHigh.appendChild(projectCard)
    }

    for (let project of midPriorityProjectsArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityMid.appendChild(projectCard)
    }

    for (let project of lowPriorityProjectsArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityLow.appendChild(projectCard)
    }

}

export { newProjectInput }