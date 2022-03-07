import { createProject, projectStorage } from './projects'

// show tasks on main content



// click to create new project


const newProjectClick = (() => {

    // show modal with name and tickmark

    const newProjectElement = document.querySelectorAll('#new-project');
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

    const enterKey = (event) => {        
        if(event.keyCode === 13) {
            closeModal();
            createProjectFromInput();
        }
    }
    
    newProjectElement.forEach( element => element.addEventListener('click', openModal))

    closeIcon.addEventListener('click', closeModal);
    tickIcon.addEventListener('click', closeModal);


    const inputElement = document.querySelector('.project-name-input');

    inputElement.addEventListener('keyup', enterKey);
})();



const createProjectFromInput = () => {

    let input = document.querySelector('.project-name-input');
    const inputValue = input.value;

    const newProject = new createProject(inputValue);

    input.value = '';

};

const newProjectNameGetter = (() => {

    const projectNameInputClick = document.querySelector('.tick');
    projectNameInputClick.addEventListener('click', createProjectFromInput);

})();

// new task click

// const newTaskClick = (() => {
//     const newTaskIcon = document.querySelector('#new-task-icon').addEventListener('click');

// })();

// render new project list

class renderDOM {

    renderProjectList() {

        const projectListUlElement = document.querySelector('.list');
        projectListUlElement.innerHTML = ``;

        projectStorage.list.forEach( element => {

            const thisElement = element;

            const projectListLiElement = document.createElement('li');
            projectListLiElement.setAttribute('class', 'list-item');
            projectListLiElement.setAttribute('id', element.name);

            projectListLiElement.innerHTML = `<span class="span-project" id="${element.id}-span">${element.name}</span> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${element.id}-delete-icon">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
            </svg>`; // replace projectName with value from input to get rid of possible underscores

            projectListLiElement.firstElementChild.addEventListener('click', DOMRenderer.renderTasksOnProjectClick);

            projectListUlElement.appendChild(projectListLiElement);

            const deleteIcon = document.querySelector(`#${element.id}-delete-icon`);
            deleteIcon.addEventListener('click', thisElement.removeProjectFromStorage);
        })
    }

    renderTasksOnProjectClick(event) {

        const projectName = event.target.innerHTML;
        const projectId = event.target.id;

        const contentTitle = document.querySelector('.content-project-title');
        contentTitle.innerText = `${projectName}`;
        contentTitle.setAttribute('id', projectId);

        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = ``;

        projectStorage.list.forEach(element => {
            if(element.name === projectName) {

                const object = element.taskStorage;
                
                for (const property in object) {

                    const cardDiv = document.createElement('div');
                    cardDiv.setAttribute('class', 'card');

                    const cardTitle = document.createElement('div');
                    cardTitle.setAttribute('class', 'card-title');
                    cardTitle.innerHTML = `${element.name}`;
                    cardDiv.appendChild(cardTitle);

                    cardContainer.appendChild(cardDiv);
                    
                }

                element.taskStorage.forEach(element => {

                    const cardDiv = document.createElement('div');
                    cardDiv.setAttribute('class', 'card');

                    const cardTitle = document.createElement('div');
                    cardTitle.setAttribute('class', 'card-title');
                    cardTitle.innerHTML = `${element.name}`;
                    cardDiv.appendChild(cardTitle);

                    cardContainer.appendChild(cardDiv);
                });
            }
        })

    }


}


    // each project to have X linked to the object to delete

const DOMRenderer = new renderDOM();

export { DOMRenderer };

