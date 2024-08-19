import "../styles/createProjectCard.css"
import { highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray } from "./saveNewProject.js"
import "./newProjectTab.js"
import { taskPage } from "./taskPage.js"




function makeCard() {
    for (let project of highPriorityProjectArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityHigh.appendChild(projectCard)

        commonStyleForAllCards(projectCard, project)
    }

    for (let project of midPriorityProjectsArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityMid.appendChild(projectCard)

        commonStyleForAllCards(projectCard, project)

    }

    for (let project of lowPriorityProjectsArray) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        priorityLow.appendChild(projectCard)

        commonStyleForAllCards(projectCard, project)

    }


}

function commonStyleForAllCards(projectCard, project) {

    let projectName = document.createElement("div")
    projectName.classList.add("projectName")
    projectName.innerText = project.projectName
    projectCard.appendChild(projectName)

    let lowerButtons = document.createElement("div")
    lowerButtons.classList.add("lowerButtons")
    projectCard.appendChild(lowerButtons)

    let editProjectCardBtn = document.createElement("div")
    editProjectCardBtn.classList.add("editProjectCardBtn")
    lowerButtons.appendChild(editProjectCardBtn)

    let editCardIcon = document.createElement("img")
    editCardIcon.classList.add("editCardIcon")
    editCardIcon.setAttribute("src", "https://www.svgrepo.com/show/421160/edit-pen-pencil.svg")
    editProjectCardBtn.appendChild(editCardIcon)

    let dueDateOnCard = document.createElement("div")
    dueDateOnCard.classList.add("dueDateOnCard")
    dueDateOnCard.innerText = project.projectDueDate
    lowerButtons.appendChild(dueDateOnCard)

    //edit button event listener
    editProjectCardBtn.addEventListener("click", taskPage)
}



export { makeCard }