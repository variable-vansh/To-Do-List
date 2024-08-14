class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskNumber = ++Task.taskCounter;
    }

    viewTasks() {
        console.log(`Task number: ${this.taskNumber}`);
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
    }

    static resetTaskCounter() {
        Task.taskCounter = 0;
    }
}

Task.taskCounter = 0;

class Project {
    constructor(tasks) {
        this.tasks = [...tasks];
        this.projectNumber = ++Project.projectCounter;
    }

    viewProject() {
        console.log(`Project-${this.projectNumber}`);
        this.tasks.forEach(task => task.viewTasks());
        console.log("-------------------------------------");
    }
}

Project.projectCounter = 0;

class ProjectCollection {
    constructor(projects) {
        this.projects = projects;
    }

    viewProjectCollection() {
        this.projects.forEach(project => project.viewProject());
    }
}

// Usage
const taskArray1 = [
    new Task("<demo title>", "<demo description>", "<demo due date>", "<demo priority>"),
    new Task("<demo title 2>", "<demo description>", "<demo due date>", "<demo priority>"),
];

//task counter reset to 0 after filling in the first task, so that when next task is created, the numbering starts afresh
Task.resetTaskCounter()

const firstProject = new Project(taskArray1);
const projectsArray = [firstProject];

const taskArray2 = [
    new Task("<demo title 3>", "<demo description>", "<demo due date>", "<demo priority>"),
    new Task("<demo title 4>", "<demo description>", "<demo due date>", "<demo priority>"),
];

const secondProject = new Project(taskArray2);
projectsArray.push(secondProject);

const projectCollection = new ProjectCollection(projectsArray);
projectCollection.viewProjectCollection();