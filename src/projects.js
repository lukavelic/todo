import { DOMRenderer } from './render'

// create new object to hold project objects

class createProjectStorage {
    constructor () {
        this.list = [];
    }
}

const projectStorage = new createProjectStorage('default');

// project objects

class createProject {
    constructor (name) {
        this.name = name // .replace(/[^A-Z0-9]/ig, "_"); // removes whitespace, replace with underscore
        this.id = this.generateGuid();
        this.taskCounter = 0;
        this.taskStorage = [];
        this.addProjectToStorage();
    }

    addProjectToStorage() {
        projectStorage.list.push(this);
        DOMRenderer.renderProjectList();
    }

    removeProjectFromStorage() {

        const projectID = this.id.slice(0, -12);

        const findProjectIndex = (element) => element.id === projectID;
        
        const projectIndex = projectStorage.list.findIndex(findProjectIndex);

        projectStorage.list.splice(projectIndex, 1);
        DOMRenderer.renderProjectList();
    }

    // add tasks to project object

    createNewTask (name, description, priority, status, date) {

        const taskName = 'task' + this.taskCounter;
        this.taskStorage[taskName] = {
            name: name,
            description: description,
            priority: priority,
            status: status,
            date: date,
        }

        this.taskCounter++;
    }

    // remove tasks from project object

    deleteTask (taskName) {

        delete this[taskName];

        this.taskCounter--;
    }

    // id

    generateGuid() {
        let result, i, j;
        result = 'A';
        for(j=0; j<32; j++) {
          if( j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
          i = Math.floor(Math.random()*16).toString(16).toUpperCase();
          result = result + i;
        }
        return result;
      }

}

// const testProject = new createProject('default space test');
// const testProjectTwo = new createProject('test');
// const testProjectThree = new createProject('anothertest');
// const testProjectFour = new createProject('ua');

// testProject.addProjectToStorage();
// testProjectTwo.addProjectToStorage()
// testProjectThree.addProjectToStorage()
// testProjectFour.addProjectToStorage()

// console.log(projectStorage)

// testProjectThree.removeProjectFromStorage();

// console.log(projectStorage)

// testProject.createNewTask('new task', 'buy bottles', 1, false, 22022022);

// console.log(projectStorage)

// testProject.deleteTask('task0');

// console.log(projectStorage)

export { createProjectStorage, createProject, projectStorage};

