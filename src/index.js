import "./style.css";
import { CreateProject } from "./projects";
import { CreateProjectStorage } from "./project_storage";
import { renderDOM } from "./render";
import { getLocalStorage } from './local_storage';

const projectStorage = new CreateProjectStorage();

// const defaultProject = new CreateProject("Default");

// defaultProject.createNewTask("Task One", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut nulla architecto aliquam dolores fuga? Accusamus deleniti distinctio incidunt, eum tempora dolorum quisquam magnam blanditiis quia quod consectetur excepturi perferendis.", 1, false, "2022-03-04");
// defaultProject.createNewTask("Task Two", "Bananas, apples", 3, false, "2022-03-15");
// defaultProject.createNewTask("Task Three", "Bananas, apples", 2, false, "2022-04-20");

const DOMRenderer = new renderDOM();

getLocalStorage();

DOMRenderer.renderProjectList();
DOMRenderer.renderTasks();
DOMRenderer.newProjectClick();
DOMRenderer.newTaskClick();

// projectStorage.clearStorage();
console.log(projectStorage);

// on project creation, stringify and push to local storage (maybe take projectStorage and push the whole thing)
// on page load, get from storage, parse, proto back methods, store in projectStorage

// tasks not sure yet, could work with the above by itself

export { projectStorage, DOMRenderer }