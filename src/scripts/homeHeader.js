import "../styles/homeHeader.css"

const header = document.createElement("div");
header.classList.add("header");
document.body.appendChild(header);

const logoSection = document.createElement("div");
logoSection.classList.add("logoSection");
header.appendChild(logoSection);

// logoimage credit: <a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons">Checklist icons created by monkik - Flaticon</a>
const logoImage = document.createElement("img")
logoImage.classList.add("logoImage")
//temporary thing, untill the img thing is fixed
logoImage.src = "https://cdn-icons-png.flaticon.com/128/10549/10549812.png"
// logoImage.src = "url(../images/logo.png)"
// logoImage.src = "https://cdn-icons-png.flaticon.com/128/4236/4236706.png"
logoSection.appendChild(logoImage)

const logoTitle = document.createElement("div");
logoTitle.classList.add("logoTitle");
logoTitle.innerText = "TaskFloww"
logoSection.appendChild(logoTitle)

const newProjectSection = document.createElement("div");
newProjectSection.classList.add("newProjectSection");
header.appendChild(newProjectSection);

const newProjectBox = document.createElement("div");
newProjectBox.classList.add("newProjectBox");
newProjectSection.appendChild(newProjectBox);

const addProjectImg = document.createElement("img");
addProjectImg.src = "https://cdn-icons-png.flaticon.com/128/4210/4210025.png";
addProjectImg.classList.add("addProjectImg")
newProjectBox.append(addProjectImg)

const newProjectText = document.createElement("div");
newProjectText.innerText = "New Project"
newProjectText.classList.add("newProjectText")
newProjectBox.appendChild(newProjectText)

export { header };