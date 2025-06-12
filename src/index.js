import "./styles.css";
import { ProjectManager } from "./projectManager";
import { renderProjects } from "./uiController";

document.addEventListener('DOMContentLoaded', () => {
    const projects = new ProjectManager();
    renderProjects(projects.getProjects());

    //Adding Task Logic
    const taskDialog = document.getElementById('task-dialog');
    const addTaskBtn = addTaskButton();

    addTaskBtn.addEventListener('click', function () {
        taskDialog.showModal();
    })
});

