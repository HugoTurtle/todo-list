import "./styles.css";
import { ProjectManager } from "./projectManager";
import { TaskManager } from "./taskManager";

import { 
    renderProjects,
    updateProjectOptions,
    renderTask,
    updateHeader,
} from "./uiController";
import { addTaskButton } from "./uiController";
import { initProjectEvents } from "./events/projectEvents";
import { initStateHandler } from "./events/stateEvents";
import { initTaskEvents } from "./events/taskEvents";
import { 
    loadProjects,
    loadTasks, 
} from "./storage";

document.addEventListener('DOMContentLoaded', () => {
    //Initialize data managers
    const projects = new ProjectManager();
    const tasks = new TaskManager();

    //Check local storage
    const savedTasks = loadTasks();
    const savedProjects = loadProjects();

    tasks.loadTasksFromStorage(savedTasks);
    projects.loadProjectsFromStorage(savedProjects);
    
    //Initial render
    renderProjects(projects.getProjects());
    renderTask(tasks.getTasks());
    updateProjectOptions(projects.getProjects());

    //Initialize event handlers
    const addTaskBtn = addTaskButton();
    initProjectEvents(projects, renderProjects, updateProjectOptions, updateHeader, renderTask, tasks);
    initTaskEvents(tasks, projects, renderTask, updateProjectOptions,addTaskBtn);
    initStateHandler(tasks, renderTask, updateHeader);
    
});

