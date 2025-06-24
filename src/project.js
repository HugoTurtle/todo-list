export class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    modifyProject(name) {
        this.name = name;
    }
    displayProject() {
        console.log(`Project Name : ${this.name}`);
    }
    getProjectName() {
        return this.name;
    }
}