import { Project } from "./project";

export class ProjectManager {
    constructor() {
        this.projects = [];
        this.nextId = 0;
    }

    addProject(name) {
        const project = new Project(name, this.nextId++);
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