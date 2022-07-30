import {IDeploymentsRepository} from "../repository/IDeploymentsRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import {Request, Response} from "express";
import {body} from "express-validator";
import Deployment from "../model/Deployment";

export default class HealthCheckController {

    constructor() {
    }

    async healthCheck(req: Request, res: Response) {
        res.send('KO');
    }
}