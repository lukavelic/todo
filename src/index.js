import "./style.css";
import { CreateProject } from "./projects";
import { CreateProjectStorage } from "./project_storage";
import { renderDOM } from "./render";

const projectStorage = new CreateProjectStorage();

const defaultProject = new CreateProject("Default");
const anotherProject = new CreateProject("Another Project");

defaultProject.createNewTask("Task One", "Bananas, apples", 1, false, "2022-03-04");
defaultProject.createNewTask("Task Two", "Bananas, apples", 3, false, "2022-03-15");
defaultProject.createNewTask("Task Three", "Bananas, apples", 2, false, "2022-04-20");

const DOMRenderer = new renderDOM();

DOMRenderer.renderProjectList();
DOMRenderer.renderTasks();
DOMRenderer.newProjectClick();
DOMRenderer.newTaskClick();

export { projectStorage, DOMRenderer }