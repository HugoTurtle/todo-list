export class Task {
    constructor(title, description, priorityLevel, dueDate, project, id) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
        this.completed = false;
        this.id = id;
        this.project = project;
    }
    modifyTask(title = this.title, description = this.description, priorityLevel = this.priorityLevel, dueDate = this.dueDate, project = this.project) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
        this.project = project;
    }
    toggleCompleted() { 
        this.completed = !this.completed;
    }
    isCompleted() {
        return this.completed;
    }
    displayTask() {
        return `${this.title} ${this.description} ${this.priorityLevel} ${this.dueDate}`;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.dueDate;
    }
    getProject() {
        return this.project;
    }
    getPriorityLevel() {
        return this.priorityLevel;
    }
    getID() {
        return this.id;
    }
}