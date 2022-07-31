import {Router} from "express";
import CertificateController from "../controller/CertificateController";

class CertificateRoutes {
    router: Router = Router();
    certificateController: CertificateController = new CertificateController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res) => this.certificateController.getCertificates(req, res)));
        // TODO Add authorization - either by token in the HTTP request or whitelisting the IP address
        // this.router.route('/').post(((req, res) => this.certificateController.createCertificate(req, res)));
    }
}

export default new CertificateRoutes().router;