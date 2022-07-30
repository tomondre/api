import Deployment from "../model/Deployment";

export interface IDeploymentsRepository {
    getDeployments(): Promise<Deployment[]>;
    createDeployment(body: Deployment): Promise<Deployment>;
}