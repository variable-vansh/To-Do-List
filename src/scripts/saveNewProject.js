//created 3 arrays for 3 priorities
let highPriorityProjectArray = []
let midPriorityProjectsArray = []
let lowPriorityProjectsArray = []

//one big array, idk when this will be used, so made it in advance
let allProjects = []

let uniqueProjectNumber = 0;

//new project
class Project {
    static allProjects = [];

    //takes in task Array
    constructor(projectName, projectPriority, projectDueDate) {
        this.projectName = projectName;
        this.projectPriority = projectPriority
        this.projectDueDate = projectDueDate
        this.taskArray = [];

        //i thought this is some dank stuff, didn't turn out to be any useful, up until now
        this.uniqueProjectNumber = ++uniqueProjectNumber;
    }

    //add new task to the task Array of project
    addTaskToArray(task) {
        this.taskArray.push(task)
    }

    // static getProjectByNumber(number) {
    //     return Project.allProjects.find(project => project.uniqueProjectNumber === number);
    // }

    //maybe something needs to go here for delete project button to work
    //will look at this later
    //29-8-24 lol
    // deleteProject() {
    // }
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
