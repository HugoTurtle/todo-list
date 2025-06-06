export class Task {
    constructor(title, description, priorityLevel, dueDate, id) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
        this.completed = false;
        this.id = id;
    }
    modifyTask(title = this.title, description = this.description, priorityLevel = this.priorityLevel, dueDate = this.dueDate) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
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
}