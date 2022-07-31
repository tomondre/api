import {Router} from "express";
import ProjectController from "../controller/ProjectController";

class ProjectRoutes {
    router: Router = Router();
    projectController: ProjectController = new ProjectController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.projectController.getProjects(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.projectController.createProject(req, res)));
    }
}

export default new ProjectRoutes().router;