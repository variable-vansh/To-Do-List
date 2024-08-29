import "../styles/taskListStyle.css"

// show up the saved tasks for the project on it's project
function displayTaskArray(project) {

    //delete old stuff from the task page
    let listOfTasksSection = document.querySelector(".listOfTasks")
    listOfTasksSection.innerHTML = '';

    // console.log(project.taskArray)
    for (let task of project.taskArray) {
        let listOfTasksSection = document.querySelector(".listOfTasks")


        // console.log(task.taskTitle)
        let taskCard = document.createElement("div")
        taskCard.classList.add("taskCard")
        listOfTasksSection.appendChild(taskCard)

        //create style for each task card on the taskPage
        let checkMarkSection = document.createElement("div")
        let titleSection = document.createElement("div")
        let descriptionSection = document.createElement("div")
        let deleteTaskSections = document.createElement("div")

        checkMarkSection.classList.add("checkMarkSection")
        titleSection.classList.add("titleSection")
        descriptionSection.classList.add("descriptionSection")
        deleteTaskSections.classList.add("deleteTaskSections")

        taskCard.appendChild(checkMarkSection)
        taskCard.appendChild(titleSection)
        taskCard.appendChild(descriptionSection)
        taskCard.appendChild(deleteTaskSections)

        titleSection.innerText = task.taskTitle;
        descriptionSection.innerText = task.taskDescription;

        let deleteTaskIcon = document.createElement("img")
        deleteTaskIcon.classList.add("deleteTaskIcon")
        deleteTaskIcon.setAttribute("src", "https://cdn.iconscout.com/icon/free/png-512/free-delete-icon-download-in-svg-png-gif-file-formats--remove-trash-cancel-garbage-user-interface-pack-icons-2411575.png?f=webp&w=256")

        deleteTaskIcon.addEventListener("click", function () {
            const index = project.taskArray.indexOf(task);
            project.taskArray.splice(index, 1);
            displayTaskArray(project)
        })

        deleteTaskSections.appendChild(deleteTaskIcon)

    }
}


export { displayTaskArray }