import {IDeploymentsRepository} from "../repository/deployments/IDeploymentsRepository";
import DeploymentsRepository from "../repository/deployments/DeploymentsRepository";
import {IWorkExperienceRepository} from "../repository/workExperience/IWorkExperienceRepository";
import WorkExperienceRepository from "../repository/workExperience/WorkExperienceRepository";

export default class RepositoryProvider {

    private static deploymentsRepository: IDeploymentsRepository;
    private static workExperienceRepository: IWorkExperienceRepository;

    private constructor() {}

    static getDeploymentsRepository(): IDeploymentsRepository {
        if (!this.deploymentsRepository) {
            this.deploymentsRepository = new DeploymentsRepository();
        }
        return this.deploymentsRepository;
    }

    static getWorkExperienceRepository(): IWorkExperienceRepository {
        if (!this.workExperienceRepository) {
            this.workExperienceRepository = new WorkExperienceRepository();
        }
        return this.workExperienceRepository;
    }

}