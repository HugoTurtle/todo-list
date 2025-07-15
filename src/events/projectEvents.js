import { saveProjects } from "../storage";

export function initProjectEvents(projects, renderProjects, updateProjectOptions, updateHeader, renderTask, tasks) {
    const addProjectButton = document.getElementById('add-project-btn');
    const projectDialog = document.getElementById('dialog');
    const projectForm = document.getElementById('dialog-form');

    const projectContainer = document.getElementById('project-container');

    const syncProjects = () =>  saveProjects(projects.getProjects());

    //Open project creation modal
    addProjectButton.addEventListener('click', () => {
        projectDialog.showModal();
    })

    //Handle new project submission
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        projects.createProject(title);

        syncProjects();

        updateProjectOptions(projects.getProjects());
        updateProjectOptions(projects.getProjects(), 'edit-project-select');
        
        renderProjects(projects.getProjects());
        projectDialog.close();
        projectForm.reset();

    })

    //Handle project deletion
    projectContainer.addEventListener('click', (e) => {
        if(!e.target.matches('.delete-button')) return;

        const projectElement = e.target.closest('.project-tab');
        const projectIndex = Number(projectElement.getAttribute('data-project-id'));
        console.log(projectIndex);
        projects.deleteProject(projectIndex);
                                          
        syncProjects();
        
        renderProjects(projects.getProjects());
        updateProjectOptions(projects.getProjects());
        updateProjectOptions(projects.getProjects(), 'edit-project-select');

        //Return to inbox state
        updateHeader('Inbox');
        renderTask(tasks.sortTasks('Inbox'));
    })

    //Cancel button
    projectDialog.querySelector('.cancel').addEventListener('click', () => {
        projectDialog.close();
    })
}