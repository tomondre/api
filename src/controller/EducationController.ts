import RepositoryProvider from "../helper/RepositoryProvider";
import {Request, Response} from "express";
import Education from "../model/Education";
import {IEducationRepository} from "../repository/education/IEducationRepository";

export default class EducationController {
    private educationRepository: IEducationRepository;

    constructor() {
        this.educationRepository = RepositoryProvider.getEducationRepository();
    }

    async getEducations(req: Request, res: Response) {
        try {
            let educations = await this.educationRepository.getEducations();
            res.json(educations);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async createEducation(req: Request, res: Response) {
        try {
            let body = new Education(req.body.school, req.body.degree, req.body.fieldOfStudy, req.body.isCurrent, new Date(req.body.startDate), new Date(req.body.endDate), req.body.location, req.body.activities, req.body.links);
            let deployment = await this.educationRepository.createEducation(body);
            res.json(deployment);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}