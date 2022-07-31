import IProjectRepository from "../repository/project/IProjectRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import Responsibility from "../model/Responsibility";
import {Request, Response} from "express";
import Project from "../model/Project";

export default class ProjectController {
    private projectRepository: IProjectRepository;

    constructor() {
        this.projectRepository = RepositoryProvider.getProjectRepository();
    }

    async getProjects(req: Request, res: Response) {
        try {
            let projects = await this.projectRepository.getProjects();
            res.json(projects);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async createProject(req: Request, res: Response) {
        try {
            let body = new Project(req.body.name, req.body.description, req.body.status, req.body.category, new Date(req.body.startDate), new Date(req.body.endDate), req.body.location, req.body.client, req.body.technologies, req.body.links);
            let project = await this.projectRepository.createProject(body);
            res.json(project);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}