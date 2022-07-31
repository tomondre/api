import {Router} from "express";
import LinkController from "../controller/LinkController";

class LinkRoutes {
    router: Router = Router();
    linkController: LinkController = new LinkController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.linkController.getLinks(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.linkController.createLink(req, res)));
    }
}

export default new LinkRoutes().router;