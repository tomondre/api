import {Application} from "express";
import * as express from "express";
import deploymentsRoutes from "./DeploymentsRoutes";
import healthCheckRoutes from "./HealthCheckRoutes";
import workExperienceRoutes from "./WorkExperienceRoutes";
import educationRoutes from "./EducationRoutes";
import projectRoutes from "./ProjectRoutes";
import certificateRoutes from "./CertificateRoutes";
import bodyParser from "body-parser";
import cors from 'cors'

export default class MainRoutes {
    constructor(app: Application) {
        app.use(express.json());
        app.use(cors());
        app.use(bodyParser.json());
        app.use('/healthCheck', healthCheckRoutes);
        app.use('/deployments', deploymentsRoutes);
        app.use('/workExperiences', workExperienceRoutes);
        app.use('/educations', educationRoutes);
        app.use('/projects', projectRoutes);
        app.use('/certificates', certificateRoutes);
    }
}