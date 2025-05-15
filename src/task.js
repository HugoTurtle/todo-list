export class Task {
    constructor(title, description, priorityLevel, dueDate) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
        this.completed = false;
    }
    modifyTask(title = this.title, description = this.description, priorityLevel = this.priorityLevel, dueDate = this.dueDate) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
    }
}