import { DOMRenderer, projectStorage } from './index'
import { setLocalStorage, getLocalStorage } from './local_storage';

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

        setLocalStorage();
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

        setLocalStorage();
    }

    // remove tasks from project object

    deleteTask (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        this.taskStorage.splice(taskIndex, 1);

        this.taskCounter--;

        setLocalStorage();
        DOMRenderer.renderTasks();
    }

    checkUncheckTask (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        const status = this.taskStorage[taskIndex].status;

        if(status === false){
            this.taskStorage[taskIndex].status = true;
        } else {
            this.taskStorage[taskIndex].status = false;
        }

        setLocalStorage()
    }

    changeTaskPriority (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        const priority = this.taskStorage[taskIndex].priority;

        if(priority === 1){
            this.taskStorage[taskIndex].priority = 3;
        } else if (priority === 2){
            this.taskStorage[taskIndex].priority = 1;
        } else if (priority === 3){
            this.taskStorage[taskIndex].priority = 2;
        }

        setLocalStorage()
    }

    changeDate(newDate, taskId) {

        const dateValue = newDate;

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        this.taskStorage[taskIndex].date = dateValue;

        setLocalStorage()
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