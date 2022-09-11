import {IDeploymentsRepository} from "../repository/deployments/IDeploymentsRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import {Request, Response} from "express";
import {body} from "express-validator";
import Deployment from "../model/Deployment";

export default class DeploymentsController {
    private deploymentsRepository: IDeploymentsRepository;

    constructor() {
        this.deploymentsRepository = RepositoryProvider.getDeploymentsRepository();
    }

    async getDeployments(req: Request, res: Response) {
        try {
            let deployments = await this.deploymentsRepository.getDeployments();
            res.json(deployments);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async createDeployment(req: Request, res: Response) {
        try {
            let body = new Deployment(0, req.body.name, req.body.description, new Date(req.body.deployedOn), req.body.repoUrl, req.body.url, req.body.healthUrl);
            let deployment = await this.deploymentsRepository.createDeployment(body);
            res.json(deployment);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}