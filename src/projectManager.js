export class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(name) {
        const project = {name, id};
        this.projects.push(project);
        return project;
    }
}