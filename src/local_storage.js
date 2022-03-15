import { projectStorage } from './index'
import { CreateProject } from './projects';

const setLocalStorage = () => {

    localStorage.clear();
    const projectStorageSerialized = JSON.stringify(projectStorage);
    console.log(projectStorageSerialized);
    localStorage.setItem('projectStorage', projectStorageSerialized);
    console.log(localStorage);
}

const getLocalStorage = () => {

    console.log(localStorage);

    if(localStorage.length > 0) {

        const storage = localStorage.getItem('projectStorage');
        const storageDeserialized = JSON.parse(storage);

        console.log(projectStorage)

        projectStorage.clearStorage();

        // Object.setPrototypeOf(storageDeserialized, CreateProject);
        // storageDeserialized.__proto__ = CreateProject.prototype;
        console.log(storageDeserialized);

        console.log(projectStorage);

        storageDeserialized.list.forEach(element => {
            
            element.__proto__ = CreateProject.prototype;
            // Object.setPrototypeOf(element, CreateProject);
            console.log(element);

            projectStorage.list.push(element);
            console.log(projectStorage  )       
        });
    } else {
        const defaultProject = new CreateProject("Default");
    }

}

export { setLocalStorage, getLocalStorage };