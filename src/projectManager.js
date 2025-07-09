import { Project } from "./project";

export class ProjectManager {
    constructor() {
        this.projects = [];
        this.nextId = 0;
        this.createProject('Default');
    }

    createProject(name) {
        const project = new Project(name, this.nextId++);
        this.addProject(project);
        return project;
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }

    getProjectsById(id) {
        return this.projects.find(project => project.id === id);
    }

    displayProjects() {
        for(const project of this.projects) {
            project.displayProject();
        }
    }

    deleteProject(id) {
        const index = this.projects.findIndex(project => project.getID() === id);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    }
}