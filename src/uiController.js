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

        const projectIcon = document.createElement('span');
        projectIcon.textContent = '#';

        projectButton.append(projectIcon);

        const projectName = document.createElement('p');
        projectName.textContent = project.name;

        projectButton.append(projectName);

        projectContainer.append(projectButton);
    }
}
export function addTaskButton() {
    const taskContainer = document.getElementById(task-container);
    
    const addTask = document.createElement('button');
    addTask.classList.add('add-task-button');
    addTask.textContent = 'Add Task';

    taskContainer.append(addTask);

    return addTask;
}