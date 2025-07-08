import {format, parseISO} from 'date-fns'

export function initTaskEvents(tasks, projects, renderTask, updateProjectOptions, addTaskBtn) {
    const taskDialog = document.getElementById('task-dialog');
    const taskForm = document.getElementById('task-form');

    const taskContainer = document.getElementById('task-container');
    const modifyTaskDialog = document.getElementById('edit-task-dialog');
    const modifyForm = modifyTaskDialog.querySelector('form');
    
    let taskToModify = null;

    //Open task creation modal
    addTaskBtn.addEventListener('click', () => {
        taskDialog.showModal();
    })

    //Handle new task submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-name').value;
        const description = document.getElementById('description').value;
        const priorityLevel = document.getElementById('priority-status').value;
        const dueDate = document.getElementById('date-picker').value;
        const formattedDate = format(parseISO(dueDate), "MM/dd/yyyy");

        const userProject = document.getElementById('project-select').value;
        
        tasks.createTask(title, description, priorityLevel, formattedDate, userProject);

        const currentState = document.querySelector('.header').textContent;
        renderTask(tasks.sortTasks(currentState));
        taskDialog.close();
    });

    //Handle task edit button
    taskContainer.addEventListener('click', (e) => {
        if(!e.target.matches('.edit-button img')) return;
        
        const taskElement = e.target.closest('.task-item');
        taskToModify = tasks.findTaskById(Number(taskElement.getAttribute('id')));

        document.getElementById('edit-task-name').value = taskToModify.getTitle();
        document.getElementById('edit-description').value = taskToModify.getDescription();
        document.getElementById('edit-date-picker').value = format(taskToModify.getDate(), 'yyyy-MM-dd');
        document.getElementById('edit-priority-status').value = taskToModify.getPriorityLevel();

        updateProjectOptions(projects.getProjects(), 'edit-project-select');
        document.getElementById('edit-project-select').value = taskToModify.getProject();

        modifyTaskDialog.showModal();
    });
    
    //Handle editing task submission
    modifyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('edit-task-name').value;
        const description = document.getElementById('edit-description').value;
        const priorityLevel = document.getElementById('edit-priority-status').value;
        const dueDate = document.getElementById('edit-date-picker').value;
        const formattedDate = format(parseISO(dueDate), "MM/dd/yyyy");
        const userProject = document.getElementById('edit-project-select').value;
           
        taskToModify.modifyTask(title, description, priorityLevel, formattedDate, userProject);

        const currentState = document.querySelector('.header').textContent;
        renderTask(tasks.sortTasks(currentState));
        modifyTaskDialog.close();
    });

    //Handle deleting task
    taskContainer.addEventListener('click', (e) => {
        if(!e.target.matches('.delete-button img')) return;

        const taskElement = e.target.closest('.task-item');
        const taskIndex = Number(taskElement.getAttribute('id'));
        
        tasks.deleteTask(taskIndex);

        const currentState = document.querySelector('.header').textContent;
        renderTask(tasks.sortTasks(currentState));
    })

    //Handle task completion
    taskContainer.addEventListener('change', (e) => {
        if (e.target.matches('.task-toggle')) {
          const checkboxInput = e.target;

          const taskItem = checkboxInput.closest('.task-item');
          taskToModify = tasks.findTaskById(Number(taskItem.getAttribute('id')));
          taskToModify.setCompleted(checkboxInput.checked);

          taskItem.classList.toggle('completed', checkboxInput.checked);
        }
      });
      
    //Cancel buttons
    taskDialog.querySelector('.cancel').addEventListener('click', () => {
        taskDialog.close();
    })
    modifyTaskDialog.querySelector('.cancel').addEventListener('click', () => {
        modifyTaskDialog.close();
    })
}