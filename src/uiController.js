import { TaskManager } from "./taskManager";

export function renderTask(tasks) {
    const taskContainer = document.getElementById('task-container');

    for(const task of tasks) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const title = document.createElement('p');
        title.textContent = task.title;

        const description = document.createElement('p');
        description.textContent = task.description;

        const dueDate = document.createElement('p');
        dueDate.textContent = task.dueDate;

        taskItem.append(title, description, dueDate);

        taskContainer.append(taskItem);
    }
}