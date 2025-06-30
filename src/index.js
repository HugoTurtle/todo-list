import "./styles.css";
import { ProjectManager } from "./projectManager";
import { renderProjects, updateHeader, updateProjectOptions } from "./uiController";
import { addTaskButton } from "./uiController";
import { TaskManager } from "./taskManager";
import { renderTask } from "./uiController";
import { format, parseISO } from "date-fns";

document.addEventListener('DOMContentLoaded', () => {
    //Project Functionality
    const projects = new ProjectManager();
    renderProjects(projects.getProjects());
    updateProjectOptions(projects.getProjects());

    const addProjectButton = document.getElementById('add-project-btn');
    const projectDialog = document.getElementById('dialog');
    const projectForm = document.getElementById('dialog-form');

    addProjectButton.addEventListener('click', function() {
        projectDialog.showModal();
    })

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        projects.createProject(title);

        updateProjectOptions(projects.getProjects());
        updateProjectOptions(projects.getProjects(), 'edit-project-select');
        
        renderProjects(projects.getProjects());
        projectDialog.close();
    })


    //Task Functionality
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

        const selectElement = document.getElementById('project-select');
        const userProject = selectElement.value;
        
        tasks.createTask(title, description, priorityLevel, formattedDate, userProject);
        const currentState = document.querySelector('.header').textContent;
        renderTask(tasks.sortTasks(currentState));
        taskDialog.close();
    })

    taskDialog.querySelector(".cancel").addEventListener("click", () => {
        taskDialog.close();
    });

    //Task Editing Functionality
    const taskContainer = document.getElementById('task-container');
    const modifyTaskDialog = document.getElementById('edit-task-dialog');
    let taskToModify = null;
    taskContainer.addEventListener('click', (e) => {
        if(e.target.matches('.edit-button img')) {
            const taskElement = e.target.closest('.task-item'); 
            taskToModify = tasks.findTaskById(Number(taskElement.getAttribute(`id`)));
            document.getElementById('edit-task-name').value = taskToModify.getTitle();
            document.getElementById('edit-description').value = taskToModify.getDescription();
            document.getElementById('edit-date-picker').value = format(taskToModify.getDate(), 'yyyy-MM-dd');
            document.getElementById('edit-priority-status').value = taskToModify.getPriorityLevel();
            updateProjectOptions(projects.getProjects(), 'edit-project-select');
            document.getElementById('edit-project-select').value = taskToModify.getProject();
            modifyTaskDialog.showModal();
        }
    })
    modifyTaskDialog.querySelector('.cancel').addEventListener('click', () => {
        modifyTaskDialog.close();
    })

    // State Functionality
    const parentElement = document.getElementById('sidebar');

    parentElement.addEventListener('click', (e) => {
        const stateOfPage = e.target.textContent.trim();
        if(e.target.classList.contains('nav-btn') || e.target.classList.contains('project-btn')) {
            updateHeader(stateOfPage);
            renderTask(tasks.sortTasks(stateOfPage));
        }
    })

});

