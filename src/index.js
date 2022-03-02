import './style.css';
// import { projectListRender } from './module'


let projectList = {
    list: [],
}

// dom stuff

//render project list

const projectListRender = () => {

    const projectListMainElement = document.querySelector('.projects-list');

    if(projectList.list.length > 0) {
        projectListMainElement.innerHTML = `<ul class="list"></ul>`;
    }

    const projectListUlElement = document.querySelector('.list');

    projectList.list.forEach(element => {
        const projectName = element.name;
        const projectListLiElement = document.createElement('li');
        projectListLiElement.setAttribute('class', 'list-item');
        projectListLiElement.setAttribute('id', projectName);
        projectListLiElement.innerHTML = `${projectName} <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${projectName}-delete-icon">
        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
        </svg>`;

        

        projectListUlElement.appendChild(projectListLiElement);

        const deleteIconId = `#${projectName}-delete-icon`
        const deleteIcon = document.querySelector(`${deleteIconId}`);
        console.log(deleteIcon)
        deleteIcon.addEventListener('click', deleteProject);
    });
};

// click new project

const newProjectClick = (() => {

    // show modal with name and tickmark

    const newProjectElement = document.querySelector('#new-project');
    const modal = document.querySelector('#myModal');
    const closeIcon = document.querySelector('.close');
    const tickIcon = document.querySelector('.tick');

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    
    const openModal = () => {
        modal.style.display = "block";
    }

    const closeModal = () => {
        modal.style.display = "none";
    }
    
    newProjectElement.addEventListener('click', openModal);
    closeIcon.addEventListener('click', closeModal);
    tickIcon.addEventListener('click', closeModal);

})();


// create new project from modal input

const newProjectInput = () => {

    const inputValue = document.querySelector('.project-name-input').value;

    const newProject = new project(inputValue);
    newProject.pushProjectToArray();

};

const projectNameGetter = (() => {

    const projectNameInputClick = document.querySelector('.tick');
    projectNameInputClick.addEventListener('click', newProjectInput);

})();

// delete project from click

const deleteProject = (event) => {

    let iconGet;
    iconGet = event.target.id;
    console.log(iconGet)

    // const deleteIconGetter = (event) => {
    //     iconGet = event.target.id;
    //     console.log(iconGet)
    // }

    const parentElementOfIcon = document.querySelector(`#${iconGet}`).parentElement;
    console.log(parentElementOfIcon);

    const projectId = parentElementOfIcon.getAttribute('id');
    console.log(projectId);
    console.log(projectList.list)

    let projectObject;
    projectList.list.forEach(element => {
        

        if(element.name === projectId) {
            projectObject = element;
        }
        console.log(projectObject);
    })

    projectObject.removeProjectFromArray()

    // deleteIcon.addEventListener('click', deleteIconGetter);

};


// create new project class

class project {

    constructor(name) {
        this.name = name;
        this.iterator = 0;
    };

    newToDo(name, description, priority, status, date) {

        const createToDo = (() => {

            const propertyName = `toDo${this.iterator}`;
            this[propertyName] = {
                name: name,
                description: description,
                priority: priority,
                status: status,
                date: date,
                };

            })();

        this.iterator++;
    }

    deleteToDo(toDoName) {

        const name = toDoName;
        delete this[name];

        this.iterator--;
    }

    pushProjectToArray() {
        projectList.list.push(this);
        projectListRender();
    }
    removeProjectFromArray() {
        const projectIndex = projectList.list.indexOf(this);
        projectList.list.splice(projectIndex, 1);
        projectListRender();
    }
}

// test

const newProject = new project('Default');
const anotherProject = new project('Test');

newProject.pushProjectToArray();
anotherProject.pushProjectToArray();

console.log(projectList)

// newProject.newToDo('task', 'something to do', 1, 25032022);
// newProject.newToDo('another task', 'something to do', 12, 12032022);
// newProject.newToDo('another task', 'something to do', 12, 12032022);

// const anotherProject = new project('test2');

// anotherProject.pushProjectToArray();

// anotherProject.newToDo('task', 'something to do', 1, 25032022);
// anotherProject.newToDo('another task', 'something to do', 12, 12032022);
// anotherProject.newToDo('another task', 'something to do', 12, 12032022);
// anotherProject.newToDo('another task', 'something to do', 12, 12032022);
// anotherProject.newToDo('deleted task', 'something to do', 12, 12032022);

// anotherProject.deleteToDo('toDo4');



// delete project - done

// create new todo - done

// set todo priority

// set todo as completed

// delete todo

