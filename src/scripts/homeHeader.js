import "../styles/homeHeader.css"
import { newProjectInput } from "../scripts/newProjectTab.js"


function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    document.body.appendChild(header);

    const logoSection = document.createElement("div");
    const newProjectSection = document.createElement("div");

    logoSection.classList.add("logoSection");
    newProjectSection.classList.add("newProjectSection");

    header.appendChild(logoSection);
    header.appendChild(newProjectSection);

    const logoImage = document.createElement("img");
    const logoTitle = document.createElement("div");

    logoImage.classList.add("logoImage");
    logoTitle.classList.add("logoTitle");

    logoImage.src = "https://cdn-icons-png.flaticon.com/128/10549/10549812.png";
    logoTitle.innerText = "TaskFloww";

    logoSection.appendChild(logoImage);
    logoSection.appendChild(logoTitle);

    const newProjectBox = document.createElement("div");
    const addProjectImg = document.createElement("img");
    const newProjectText = document.createElement("div");

    newProjectBox.classList.add("newProjectBox");
    addProjectImg.classList.add("addProjectImg");
    newProjectText.classList.add("newProjectText");

    addProjectImg.src = "https://cdn-icons-png.flaticon.com/128/4210/4210025.png";
    newProjectText.innerText = "New Project";

    newProjectBox.appendChild(addProjectImg);
    newProjectBox.appendChild(newProjectText);
    newProjectSection.appendChild(newProjectBox);

    newProjectBox.addEventListener("click", newProjectInput)
}

export { createHeader };