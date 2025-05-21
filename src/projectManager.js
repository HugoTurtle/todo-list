export class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(name) {
        const project = {name, id};
        this.projects.push(project);
        return project;
    }

    getProjects() {
        return this.projects;
    }

    getProjectsById(id) {
        return this.projects.find(project => project.id === id);
    }
}