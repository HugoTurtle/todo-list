import "./styles.css";
import { ProjectManager } from "./projectManager";
import { renderProjects } from "./uiController";
import { addTaskButton } from "./uiController";
import { TaskManager } from "./taskManager";
import { renderTask } from "./uiController";
import { parse, format, parseISO } from "date-fns";

document.addEventListener('DOMContentLoaded', () => {
    const projects = new ProjectManager();
    renderProjects(projects.getProjects());

    const taskDialog = document.getElementById('task-dialog');
    const addTaskBtn = addTaskButton();

    addTaskBtn.addEventListener('click', function () {
        taskDialog.showModal();
    });
    
    const tasks = new TaskManager();
    const taskForm = document.getElementById('task-form');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-name').value;
        const description = document.getElementById('description').value;
        const priorityLevel = document.getElementById('priority-status').value;

        const dueDate = document.getElementById('date-picker').value;
        const parsedDate = parseISO(dueDate);
        const formattedDate = format((parsedDate), "MM/dd/yyyy");
        
        tasks.createTask(title, description, priorityLevel, formattedDate);
        renderTask(tasks.getTasks());
        taskDialog.close();
    })

    taskDialog.querySelector(".cancel").addEventListener("click", () => {
        taskDialog.close();
    });

});

