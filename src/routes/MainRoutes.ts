import {Application} from "express";
import * as express from "express";
import deploymentsRoutes from "./DeploymentsRoutes";
import healthCheckRoutes from "./HealthCheckRoutes";
import bodyParser from "body-parser";
import cors from 'cors'

export default class MainRoutes {
    constructor(app: Application) {
        app.use(express.json());
        app.use(cors());
        app.use(bodyParser.json());
        app.use('/healthCheck', healthCheckRoutes);
        app.use('/deployments', deploymentsRoutes);
    }
}