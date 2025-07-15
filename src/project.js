export class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static fromJSON(obj) {
        return new Project(
            obj.name,
            obj.id
        )
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
    getID() {
        return this.id;
    }
}