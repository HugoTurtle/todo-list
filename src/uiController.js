import { TaskManager } from "./taskManager";
import deleteIcon from './assets/icons/deleteIcon.svg';
import editIcon from './assets/icons/editIcon.svg'

export function renderTask(tasks) {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    for(const task of tasks) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        if(task.isCompleted()) {
            taskItem.classList.add('completed');   
        }

        const checkboxWrapper = document.createElement('label');
        checkboxWrapper.classList.add('checkbox-wrapper');
        
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('task-toggle');
        
        const customCircle = document.createElement('span');
        customCircle.classList.add('custom-checkbox');
        
        checkboxInput.checked = task.isCompleted();

        checkboxWrapper.append(checkboxInput, customCircle);

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

        taskItem.append(checkboxWrapper, title, description, dueDate, buttonContainer);
        
        taskItem.setAttribute('id', `${task.getID()}`)

        taskContainer.append(taskItem);
    }
}

export function renderProjects(projects) {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = ``;

    for(const project of projects) {
        const projectTab = document.createElement('div');
        projectTab.classList.add('project-tab');
    
        const projectButton = document.createElement('button');
        projectButton.classList.add('project-btn');
        projectButton.setAttribute('data-project-id', project.getID());
        projectButton.setAttribute('aria-label', `Open project ${project.name}`);
        projectButton.textContent = project.name;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('aria-label', `Delete project ${project.name}`);
        deleteButton.textContent = '×'; 

        projectTab.append(projectButton, deleteButton);
        projectContainer.append(projectTab);
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
export function updateProjectOptions(projects, selectId = 'project-select') {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = '';
    for(const project of projects) {
        const newProjectOption = new Option(project.getProjectName(), project.getProjectName());
        selectElement.add(newProjectOption);
    }
}