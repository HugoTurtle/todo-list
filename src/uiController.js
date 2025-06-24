import { TaskManager } from "./taskManager";
import deleteIcon from './assets/icons/deleteIcon.svg';
import editIcon from './assets/icons/editIcon.svg'

export function renderTask(tasks) {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    for(const task of tasks) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const title = document.createElement('p');
        title.classList.add('task-title');
        title.textContent = task.title;

        const description = document.createElement('p');
        description.classList.add('task-description');
        description.textContent = task.description;

        const dueDate = document.createElement('p');
        dueDate.classList.add('task-due-date');
        dueDate.textContent = task.dueDate;

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        const editImg = document.createElement('img');
        editImg.src = editIcon;
        editImg.alt = 'Edit';
        editButton.append(editImg);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        const deleteImg = document.createElement('img');
        deleteImg.src = deleteIcon;
        deleteImg.alt = 'Delete';
        deleteButton.append(deleteImg);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('container');
        buttonContainer.append(editButton, deleteButton);

        taskItem.append(title, description, dueDate, buttonContainer);

        taskContainer.append(taskItem);
    }
}

export function renderProjects(projects) {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = ``;

    for(const project of projects) {
        const projectButton = document.createElement('button');
        projectButton.classList.add('project-btn');
        
        projectButton.textContent = project.name;

        projectContainer.append(projectButton);
    }
}
export function addTaskButton() {
    const main = document.querySelector('main');
    
    const addTask = document.createElement('button');
    addTask.classList.add('add-task-button');
    addTask.textContent = 'Add Task';

    main.append(addTask);

    return addTask;
}
export function updateHeader(state) {
    const header = document.querySelector('.header');

    header.textContent = state;
}
export function updateProjectOptions(projects) {
    const selectElement = document.getElementById('project-select');
    selectElement.innerHTML = '';
    for(const project of projects) {
        const newProjectOption = new Option(project.getProjectName(), project.getProjectName());
        selectElement.add(newProjectOption);
    }
}