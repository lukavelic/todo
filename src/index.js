import './style.css';
import { createProjectStorage, createProject, projectStorage } from './projects';
import { DOMRenderer } from './render';

const defaultProject = new createProject('Default');
const anotherProject = new createProject('To Do Project');

defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);

anotherProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
anotherProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);