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
            deleteIcon.addEventListener('click', projectStorage.removeProjectFromStorage);
            deleteIcon.addEventListener('click', DOMRenderer.renderTasks);
        });
    };

    // render tasks of first project on first load

    renderTasks(event) {

        let project;

        if(event !== undefined && event.currentTarget.classList[0] != "task-modal-tick") {
            const projectId = event.target.id.slice(0, -5);
            project = projectStorage.projectGetter(projectId);
        }   else if (event !== undefined && event.currentTarget.classList[0] === "task-modal-tick") {
            const projectId = document.querySelector('.content-project-title').id;
            project = projectStorage.projectGetter(projectId);
            }
            else if (projectStorage.list.length > 0) {
                project = projectStorage.list[0];
            }

        if (project !== undefined) {
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
                cardDiv.setAttribute('class', 'card collapsed');
                cardDiv.setAttribute('id', `${taskObject.id}-card`);                  
                cardContainer.appendChild(cardDiv);

                const cardPriorityStyle = document.createElement('div');
                cardPriorityStyle.setAttribute('class', 'card-priority');
                cardDiv.appendChild(cardPriorityStyle);

                const cardContentDiv = document.createElement('div');
                cardContentDiv.setAttribute('class', 'card-content');
                cardContentDiv.setAttribute('id', `${taskObject.id}-content`)
                cardDiv.appendChild(cardContentDiv);
                
                // Title
                const cardTitle = document.createElement('div');
                cardTitle.setAttribute('class', 'card-title');

                let checkboxStatus;
                if(taskObject.status === true) {
                    checkboxStatus = 'checked'
                    cardContentDiv.setAttribute('class', 'card-content strike');
                }

                cardTitle.innerHTML = `${taskObject.name} <div class="task-icons">
                <label class="checkbox-container"><input type="checkbox" id="${taskObject.id}-checkbox" ${checkboxStatus}><span class="mark"></span></label>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" id="${taskObject.id}-expand-icon">
                <path fill="currentColor" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" id="${taskObject.id}-expand-icon"/>
                </svg> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${taskObject.id}-delete-icon">
                <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                </svg>
                </div>`;
                cardContentDiv.appendChild(cardTitle);

                // Checkbox

                const checkbox = document.querySelector(`#${taskObject.id}-checkbox`)
                checkbox.addEventListener('click', function(){project.checkUncheckTask(taskObject.id)})
                checkbox.addEventListener('click', DOMRenderer.strikethroughTaskIfCompleted)

                // Delete Button

                const deleteIcon = document.querySelector(`#${taskObject.id}-delete-icon`);
                deleteIcon.addEventListener('click', function(){project.deleteTask(taskObject.id)})

                // Expand / Retract button

                const expandIcon = document.querySelector(`#${taskObject.id}-expand-icon`);
                // expandIcon.forEach(element => element.addEventListener('click', DOMRenderer.expandTasks))
                expandIcon.addEventListener('click', DOMRenderer.expandTasks);

                // const expandIcon = document.createElement('div');
                // expandIcon.setAttribute('class', 'expand-icon')
                // expandIcon.setAttribute('id', `${taskObject.id}-expand-div`);
                // expandIcon.innerHTML = ``
                // cardContentDiv.appendChild(expandIcon)

                // Card Hiders

                const cardHider = document.createElement('div');
                cardHider.setAttribute('class', 'card-hider');
                cardHider.setAttribute('id', `${taskObject.id}-hider`);
                cardContentDiv.appendChild(cardHider);

                // Description
                const cardDescription = document.createElement('div');
                cardDescription.setAttribute('class', 'card-description');
                cardDescription.innerHTML = `${taskObject.description}`;
                cardHider.appendChild(cardDescription);
                // Priority
                if(taskObject.priority === 1) {
                    cardPriorityStyle.setAttribute('class', 'priority-high')
                } else if(taskObject.priority === 2) {
                    cardPriorityStyle.setAttribute('class', 'priority-medium')
                } else if(taskObject.priority === 3) {
                    cardPriorityStyle.setAttribute('class', 'priority-low')
                }

                // Priority toggle

                cardPriorityStyle.addEventListener('click', DOMRenderer.togglePriority);
                cardPriorityStyle.addEventListener('click', function(){project.changeTaskPriority(taskObject.id)})

                // Due date
                const cardDate = document.createElement('div');
                cardDate.setAttribute('class', 'date-div');
                cardHider.appendChild(cardDate);


                const dateInput = document.createElement('input')
                dateInput.setAttribute('type', 'date');
                dateInput.setAttribute('value', `${taskObject.date}`)
                dateInput.setAttribute('name', 'date');
                dateInput.setAttribute('class', 'card-date');

                const dateLabel = document.createElement('label');
                dateLabel.setAttribute('for', 'date');
                dateLabel.innerText = 'Due: ';

                cardDate.appendChild(dateLabel)
                cardDate.appendChild(dateInput);

                // Change date

                let newDate;
                // const newDate = dateInput.onchange.value
                
                dateInput.addEventListener('blur', function() {
                    newDate = dateInput.value;
                    project.changeDate(newDate, taskObject.id)});

                // const cardCompletionDone = document.createElement('option');
                // cardCompletionDone.innerText = 'Done';
                // cardCompletion.appendChild(cardCompletionDone);

                // const cardCompletionNotDone = document.createElement('option');
                // cardCompletionNotDone.innerText = 'Not Done';
                // cardCompletion.appendChild(cardCompletionNotDone);
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
                DOMRenderer.createProjectFromInput();
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
    
        const modal = document.querySelector('#task-modal');
        const closeIcon = document.querySelector('.task-modal-close');
        const tickIcon = document.querySelector('.task-modal-tick');
    
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
        const projectId = projectTitle.id;

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

        if(project === undefined) {
            alert('Please Select/Create a Project Before Creating Tasks!')
        }    
        project.createNewTask(nameValue, descriptionValue, priorityValue, false, dateValue);        

        nameInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    
    };

    expandTasks(event) {
        const idGetter = event.target.id.slice(0, -12);

        const cardHider = document.querySelector(`#${idGetter}-card`);
        
        if(cardHider.classList[1] === 'collapsed') {
            cardHider.setAttribute('class', 'card');
        } else {
            cardHider.setAttribute('class', 'card collapsed');
        }
    }

    strikethroughTaskIfCompleted (event) {
        const checkedValue = event.target.checked;
        const taskId = event.target.id.slice(0, -9);

        const contentDiv = document.querySelector(`#${taskId}-content`)

        if(checkedValue === true) {
            contentDiv.setAttribute('class', 'card-content strike');
        } else {
            contentDiv.setAttribute('class', 'card-content')
        }
        
        
    }

    togglePriority(event) {
        const priorityDiv = event.target;
        const priorityValue = priorityDiv.classList[0];

        if (priorityValue === 'priority-low') {
            priorityDiv.setAttribute('class', 'priority-medium')

        } else if (priorityValue === 'priority-medium') {
            priorityDiv.setAttribute('class', 'priority-high')

        } else if (priorityValue === 'priority-high') {
            priorityDiv.setAttribute('class', 'priority-low')

        }
    }

    
};

export { renderDOM };

