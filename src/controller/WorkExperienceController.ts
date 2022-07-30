import {IWorkExperienceRepository} from "../repository/workExperience/IWorkExperienceRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import WorkExperience from "../model/WorkExperience";
import {Request, Response} from "express";

export default class WorkExperienceController {

    private workExperienceRepository: IWorkExperienceRepository;

    constructor() {
        this.workExperienceRepository = RepositoryProvider.getWorkExperienceRepository();
    }

    async getAllWorkExperience(req: Request, res: Response) {
        try {
            let allWorkExperience = await this.workExperienceRepository.getAllWorkExperience();
            res.json(allWorkExperience);
        } catch (error: any) {
            console.log(error.toString());
            res.status(400);
            res.send(error.toString());
        }
    }

    async createWorkExperience(req: Request, res: Response) {
        try {
            let workExperience = new WorkExperience( req.body.position, req.body.company, req.body.employmentType, req.body.isCurrent, new Date(req.body.startDate), new Date(req.body.endDate), req.body.location, req.body.responsibilities, req.body.links);
            let createdWorkExperience = await this.workExperienceRepository.createWorkExperience(workExperience);
            res.json(createdWorkExperience);
        } catch (error: any) {
            console.log(error.toString());
            res.status(400);
            res.send(error.toString());
        }
    }
}