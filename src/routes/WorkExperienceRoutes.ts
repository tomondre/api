import {Router} from "express";
import DeploymentsController from "../controller/DeploymentsController";
import HealthCheckController from "../controller/HealthCheckController";
import WorkExperienceController from "../controller/WorkExperienceController";

class WorkExperienceRoutes {
    router: Router = Router();
    workExperienceController: WorkExperienceController = new WorkExperienceController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.workExperienceController.getAllWorkExperience(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.workExperienceController.createWorkExperience(req, res)));
    }
}

export default new WorkExperienceRoutes().router;