

export function initProjectEvents(projects, renderProjects, updateProjectOptions) {
    const addProjectButton = document.getElementById('add-project-btn');
    const projectDialog = document.getElementById('dialog');
    const projectForm = document.getElementById('dialog-form');
    
    const allProjects = projects.getProjects();

    //Open project creation modal
    addProjectButton.addEventListener('click', () => {
        projectDialog.showModal();
    })

    //Handle new project submission
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        projects.createProject(title);

        updateProjectOptions(allProjects);
        updateProjectOptions(allProjects, 'edit-project-select');
        
        renderProjects(allProjects);
        projectDialog.close();
        projectForm.reset();

    })

    //Cancel button
    projectDialog.querySelector('.cancel').addEventListener('click', () => {
        projectDialog.close();
    })
}