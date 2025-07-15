const STORAGE_KEYS = {
    PROJECTS: 'todo-projects',
    TASKS: 'todo-tasks',
}

export function saveProjects(projectArray) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectArray));
}

export function loadProjects() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS));
}   

export function saveTasks(taskArray) {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(taskArray));
}

export function loadTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS));
}