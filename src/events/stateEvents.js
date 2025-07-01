

export function initStateHandler(tasks, renderTask, updateHeader) {
    const sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', (e) => {
        const target = e.target.closest('.nav-btn, .project-btn');
        if (!target) return;
    
        const stateName = target.textContent.trim();
        updateHeader(stateName);
        renderTask(tasks.sortTasks(stateName));
    });
}