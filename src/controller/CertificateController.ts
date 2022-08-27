import {IDeploymentsRepository} from "../repository/deployments/IDeploymentsRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import {Request, Response} from "express";
import {body} from "express-validator";
import Deployment from "../model/Deployment";
import {ICertificateRepository} from "../repository/certificate/ICertificateRepository";
import Certificate from "../model/Certificate";

export default class CertificateController {
    private certificateRepository: ICertificateRepository;

    constructor() {
        this.certificateRepository = RepositoryProvider.getCertificateRepository();
    }

    async getCertificates(req: Request, res: Response) {
        try {
            let certificates = await this.certificateRepository.getCertificates();
            res.json(certificates);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async createCertificate(req: Request, res: Response) {
        try {
            let certificate = new Certificate(req.body.name, req.body.organization, req.body.description, new Date(req.body.issuedDate), new Date(req.body.expiryDate), req.body.credentialId, req.body.url);
            let created = await this.certificateRepository.createCertificate(certificate);
            res.json(created);
        }
        catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}