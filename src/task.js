export class Task {
    constructor(title, description, priorityLevel, dueDate, project, id, completed = false) {
        this.title = title;
        this.description = description;
        this.priorityLevel = priorityLevel;
        this.dueDate = dueDate;
        this.id = id;
        this.project = project;
        this.completed = completed;
    }
    static fromJSON(obj) {
        return new Task(
            obj.title,
            obj.description,
            obj.priorityLevel,
            obj.dueDate,
            obj.project,
            obj.id,
            obj.completed
        )
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
    setCompleted(value) {
        this.completed = value;
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