import { CreateProject } from './projects'
import { projectStorage } from './index'
import { DOMRenderer } from './index'

// show tasks on main content

class renderDOM {

    // render list of projects

    renderProjectList() {

        const projectListUlElement = document.querySelector('.list');
        projectListUlElement.innerHTML = ``;
        

        projectStorage.list.forEach(element => {

            const projectListLiElement = document.createElement('li');
            projectListLiElement.setAttribute('class', 'list-item');
            projectListLiElement.setAttribute('id', element.name);

            projectListLiElement.innerHTML = `<span class="span-project" id="${element.id}-span">${element.name}</span> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${element.id}-delete-icon">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
            </svg>`;

            projectListLiElement.firstElementChild.addEventListener('click', DOMRenderer.renderTasks);

            projectListUlElement.appendChild(projectListLiElement);

            const deleteIcon = document.querySelector(`#${element.id}-delete-icon`);
            console.log(deleteIcon)
            deleteIcon.addEventListener('click', projectStorage.removeProjectFromStorage);
            deleteIcon.addEventListener('click', DOMRenderer.renderTasks);
        });
    };

    // render tasks of first project on first load

    renderTasks(event) {

        let project;
        console.log(project)

        if(event !== undefined && event.currentTarget.classList[0] != "task-modal-tick") {
            console.log('test event')
            console.log(event)
            const projectId = event.target.id.slice(0, -5);
            console.log(projectId)
            project = projectStorage.projectGetter(projectId);
        }   else if (event !== undefined && event.currentTarget.classList[0] === "task-modal-tick") {
            console.log(event)
            const projectId = document.querySelector('.content-project-title').id;
            project = projectStorage.projectGetter(projectId);
            }
            else if (projectStorage.list.length > 0) {
                project = projectStorage.list[0];
            }

        if (project !== undefined) {
            console.log('test on load and yes event')
            const projectName = project.name;
            const projectId = project.id;

            const contentTitle = document.querySelector('.content-project-title');
            contentTitle.innerText = `${projectName}`;
            contentTitle.setAttribute('id', projectId);

            const cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = ``;

            const taskContainer = project.taskStorage;
                    
            for (const property in taskContainer) {

                const taskObject = taskContainer[property];

                const cardDiv = document.createElement('div');
                cardDiv.setAttribute('class', 'card');                    
                cardContainer.appendChild(cardDiv);

                const cardPriorityStyle = document.createElement('div');
                cardPriorityStyle.setAttribute('class', 'card-priority');
                cardDiv.appendChild(cardPriorityStyle);

                const cardContentDiv = document.createElement('div');
                cardContentDiv.setAttribute('class', 'card-content');
                cardDiv.appendChild(cardContentDiv);
                
                // Title
                const cardTitle = document.createElement('div');
                cardTitle.setAttribute('class', 'card-title');
                cardTitle.innerHTML = `${taskObject.name}`;
                cardContentDiv.appendChild(cardTitle);
                // Description
                const cardDescription = document.createElement('div');
                cardDescription.setAttribute('class', 'card-description');
                cardDescription.innerHTML = `${taskObject.description}`;
                cardContentDiv.appendChild(cardDescription);
                // Priority
                if(taskObject.priority === 1) {
                    cardPriorityStyle.setAttribute('class', 'priority-high')
                } else if(taskObject.priority === 2) {
                    cardPriorityStyle.setAttribute('class', 'priority-medium')
                } else if(taskObject.priority === 3) {
                    cardPriorityStyle.setAttribute('class', 'priority-low')
                }
                // Due date
                const cardDate = document.createElement('input')
                cardDate.setAttribute('type', 'date');
                cardDate.setAttribute('value', `${taskObject.date}`)
                cardDate.setAttribute('name', 'date');
                cardDate.setAttribute('class', 'card-date');

                const cardDateLabel = document.createElement('label');
                cardDateLabel.setAttribute('for', 'date');
                cardDateLabel.innerText = 'Due:';

                cardContentDiv.appendChild(cardDateLabel)
                cardContentDiv.appendChild(cardDate);

                // Completion
                const cardCompletion = document.createElement('select');
                cardCompletion.setAttribute('class', 'card-completion');
                cardContentDiv.appendChild(cardCompletion);

                const cardCompletionDone = document.createElement('option');
                cardCompletionDone.innerText = 'Done';
                cardCompletion.appendChild(cardCompletionDone);

                const cardCompletionNotDone = document.createElement('option');
                cardCompletionNotDone.innerText = 'Not Done';
                cardCompletion.appendChild(cardCompletionNotDone);
            }
        } else {
            const contentTitle = document.querySelector('.content-project-title');
            contentTitle.innerText = '';

            const cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = '';
        }
    };

    

    // add event listeners 

    // select project from list



    // create new project listener

    newProjectClick() {

        // show modal with name and tickmark
    
        const newProjectElement = document.querySelectorAll('#new-project');
        const modal = document.querySelector('#project-modal');
        const closeIcon = document.querySelector('.project-modal-close');
        const tickIcon = document.querySelector('.project-modal-tick');
    
        console.log(newProjectElement)
    
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
        
        const openProjectModal = () => {
            modal.style.display = "block";
        }
    
        const closeProjectModal = () => {
            modal.style.display = "none";
        }
    
        const enterKey = (event) => {        
            if(event.keyCode === 13) {
                closeProjectModal();
                createProjectFromInput();
            }
        }
        
        newProjectElement.forEach( element => element.addEventListener('click', openProjectModal))
    
        closeIcon.addEventListener('click', closeProjectModal);
        tickIcon.addEventListener('click', closeProjectModal);
        tickIcon.addEventListener('click', DOMRenderer.createProjectFromInput)
    
    
        const inputElement = document.querySelector('.project-name-input');
    
        inputElement.addEventListener('keyup', enterKey);
    };

    // 

    
    
    // create new task listener

    newTaskClick() {
        const newTaskIcon = document.querySelectorAll('#new-task');
        console.log(newTaskIcon)
    
        const modal = document.querySelector('#task-modal');
        const closeIcon = document.querySelector('.task-modal-close');
        const tickIcon = document.querySelector('.task-modal-tick');
        console.log(tickIcon)
    
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
        
        const openTaskModal = () => {
            modal.style.display = "block";
        }
    
        const closeTaskModal = () => {
            modal.style.display = "none";
        }
    
        // const enterKey = (event) => {        
        //     if(event.keyCode === 13) {
        //         closeTaskModal();
        //         // createProjectFromInput(); 
        //     }
        // }
        
        newTaskIcon.forEach( element => element.addEventListener('click', openTaskModal))
    
        closeIcon.addEventListener('click', closeTaskModal);
        tickIcon.addEventListener('click', closeTaskModal);
        tickIcon.addEventListener('click', DOMRenderer.createTaskFromInput);
        tickIcon.addEventListener('click', DOMRenderer.renderTasks);
    
    
        // const inputElement = document.querySelector('.project-name-input');
    
        // inputElement.addEventListener('keyup', enterKey);
    };

    createProjectFromInput = () => {

        let input = document.querySelector('.project-name-input');
        const inputValue = input.value;
    
        const newProject = new CreateProject(inputValue);
    
        input.value = '';

        DOMRenderer.renderProjectList();
    
    };

    createTaskFromInput() {

        const projectTitle = document.querySelector('.content-project-title');
        const projectId = projectTitle.id
        console.log(projectId)

        const project = projectStorage.projectGetter(projectId);
    
        const nameInput = document.querySelector('.task-name-input');
        const nameValue = nameInput.value;
    
        const descriptionInput = document.querySelector('.task-description-input');
        const descriptionValue = descriptionInput.value;
    
        const dateInput = document.querySelector('.task-date-input');
        const dateValue = dateInput.value;
    
        const priorityInput = document.querySelector('.task-priority');
        let priorityValue = priorityInput.value;
        priorityValue = parseInt(priorityValue);
    
        project.createNewTask(nameValue, descriptionValue, priorityValue, false, dateValue);  
    
    };
};

export { renderDOM };

