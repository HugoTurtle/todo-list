const STORAGE_KEYS = {
    PROJECTS: 'todo-projects',
    TASKS: 'todo-tasks',
}

export function saveProject(project) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(project));
}

export function loadProjects() {
    return localStorage.getItem(STORAGE_KEYS.PROJECTS);
}   

export function saveTask(task) {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(task));
}

export function loadTasks() {
    return localStorage.getItem(STORAGE_KEYS.TASKS);
}