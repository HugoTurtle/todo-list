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
        title.textContent = task.title;

        const description = document.createElement('p');
        description.textContent = task.description;

        const dueDate = document.createElement('p');
        dueDate.textContent = task.dueDate;

        const editButton = document.createElement('button');
        const editImg = document.createElement('img');
        editImg.src = editIcon;
        editImg.alt = 'Edit';
        editButton.append(editImg);

        const deleteButton = document.createElement('button');
        const deleteImg = document.createElement('img');
        deleteImg.src = deleteIcon;
        deleteImg.alt = 'Delete';
        deleteButton.append(deleteImg);

        taskItem.append(title, description, dueDate, editButton, deleteButton);

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