import {IDeploymentsRepository} from "../repository/IDeploymentsRepository";
import DeploymentsRepository from "../repository/DeploymentsRepository";

export default class RepositoryProvider {

    private static deploymentsRepository: IDeploymentsRepository;

    private constructor() {}

    static getDeploymentsRepository(): IDeploymentsRepository {
        if (!this.deploymentsRepository) {
            this.deploymentsRepository = new DeploymentsRepository();
        }
        return this.deploymentsRepository;
    }

}