import {Router} from "express";
import EducationController from "../controller/EducationController";

class EducationRoutes {
    router: Router = Router();
    educationController: EducationController = new EducationController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.educationController.getEducations(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.educationController.createEducation(req, res)));
    }
}

export default new EducationRoutes().router;