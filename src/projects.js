import { projectStorage } from './index'

// project objects

class CreateProject {

    constructor (name) {
        this.name = name;
        this.id = this.generateGuid();
        this.taskCounter = 0;
        this.taskStorage = [];
        this.addProjectToStorage();
    }

    // this should go in project storage

    addProjectToStorage() {
        projectStorage.list.push(this);
        // DOMRenderer.renderProjectList(); 
    }

    // add tasks to project object

    createNewTask (name, description, priority, status, date) {

        const task = {
            id: this.generateGuid(),
            name,
            description,
            priority,
            status,
            date,
        };

        this.taskStorage.push(task);

        this.taskCounter++;
    }

    // remove tasks from project object

    deleteTask (selectedProject, taskId) {

        console.log(selectedProject.taskStorage)

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = selectedProject.taskStorage.findIndex(findTaskIndex);
        console.log(taskIndex)

        selectedProject.taskStorage.splice(taskIndex, 1);

        selectedProject.taskCounter--;
    }

    // id

    generateGuid() {
        let result, i, j;
        result = 'A'; // should not start with number for queryselector
        for(j=0; j<32; j++) {
          if( j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
          i = Math.floor(Math.random()*16).toString(16).toUpperCase();
          result = result + i;
        }
        return result;
      }

}

export { CreateProject };