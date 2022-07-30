import {Router} from "express";
import DeploymentsController from "../controller/DeploymentsController";

class DeploymentsRoutes {
    router: Router = Router();
    deploymentsController: DeploymentsController = new DeploymentsController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.deploymentsController.getDeployments(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.deploymentsController.createDeployment(req, res)));
    }
}

export default new DeploymentsRoutes().router;