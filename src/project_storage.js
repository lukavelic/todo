import { projectStorage } from "./index";
import { DOMRenderer } from "./index";
import { setLocalStorage } from './local_storage';

class CreateProjectStorage {

    constructor () {
        this.list = [];
    };

    // find and select project by id

    projectGetter(projectId) {

        const findProjectIndex = (element) => element.id === projectId;
        const projectIndex = projectStorage.list.findIndex(findProjectIndex);

        return projectStorage.list[projectIndex];

    };

    removeProjectFromStorage() {

        const slicedId = this.id.slice(0, -12);

        const findProjectIndex = (element) => element.id === slicedId;
        const projectIndex = projectStorage.list.findIndex(findProjectIndex);

        projectStorage.list.splice(projectIndex, 1);

        setLocalStorage();
        DOMRenderer.renderProjectList();
    }

    // clear storage

    clearStorage() {
        // delete projectStorage.list;
        projectStorage.list.length = 0;
    }


};

export { CreateProjectStorage };