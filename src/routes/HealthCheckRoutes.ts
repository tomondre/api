import {Router} from "express";
import DeploymentsController from "../controller/DeploymentsController";
import HealthCheckController from "../controller/HealthCheckController";

class HealthCheckRoutes {
    router: Router = Router();
    healthCheckController: HealthCheckController = new HealthCheckController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.healthCheckController.healthCheck(req, res)));
    }
}

export default new HealthCheckRoutes().router;