import Project from "../../model/Project";

export default interface IProjectRepository {
    getProjects(): Promise<Project[]>;
    createProject(body: Project): Promise<Project>;
}