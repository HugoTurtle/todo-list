import "./styles.css";
import { ProjectManager } from "./projectManager";
import { renderProjects } from "./uiController";

document.addEventListener('DOMContentLoaded', () => {
    const projects = new ProjectManager();
    renderProjects(projects.getProjects());
});

