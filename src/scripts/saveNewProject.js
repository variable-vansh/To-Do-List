//created 3 arrays for 3 priorities
let highPriorityProjectArray = []
let midPriorityProjectsArray = []
let lowPriorityProjectsArray = []

//one big array, idk when this will be used, so made it in advance
let allProjects = []

//new project
class Project {
    //takes in task Array
    constructor(projectName, projectPriority, projectDueDate) {
        this.projectName = projectName;
        this.projectPriority = projectPriority
        this.projectDueDate = projectDueDate
    }
}

function createNewProject(projectName, projectPriority, projectDueDate) {

    if (projectPriority == "high") {
        highPriorityProjectArray.push(new Project(projectName, projectPriority, projectDueDate))
    }
    if (projectPriority == "mid") {
        midPriorityProjectsArray.push(new Project(projectName, projectPriority, projectDueDate))
    }
    if (projectPriority == "low") {
        lowPriorityProjectsArray.push(new Project(projectName, projectPriority, projectDueDate))
    }
    //create new project with inputs and store it into an array

    // console.log(highPriorityProjectArray)
    // console.log(midPriorityProjectsArray)
    // console.log(lowPriorityProjectsArray)

    allProjects.push(highPriorityProjectArray, midPriorityProjectsArray, lowPriorityProjectsArray)
}

export {
    createNewProject,
    highPriorityProjectArray,
    midPriorityProjectsArray,
    lowPriorityProjectsArray
};
