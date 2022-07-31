import {IDeploymentsRepository} from "../repository/deployments/IDeploymentsRepository";
import DeploymentsRepository from "../repository/deployments/DeploymentsRepository";
import {IWorkExperienceRepository} from "../repository/workExperience/IWorkExperienceRepository";
import WorkExperienceRepository from "../repository/workExperience/WorkExperienceRepository";
import {IEducationRepository} from "../repository/education/IEducationRepository";
import EducationRepository from "../repository/education/EducationRepository";
import IProjectRepository from "../repository/project/IProjectRepository";
import ProjectRepository from "../repository/project/ProjectRepository";
import {ICertificateRepository} from "../repository/certificate/ICertificateRepository";
import CertificateRepository from "../repository/certificate/CertificateRepository";
import {ILinkRepository} from "../repository/link/ILinkRepository";
import LinkRepository from "../repository/link/LinkRepository";

export default class RepositoryProvider {

    private static deploymentsRepository: IDeploymentsRepository;
    private static workExperienceRepository: IWorkExperienceRepository;
    private static educationRepository: IEducationRepository;
    private static projectRepository: IProjectRepository;
    private static certificateRepository: ICertificateRepository;
    private static linkRepository: ILinkRepository;

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

    static getEducationRepository(): IEducationRepository {
        if (!this.educationRepository) {
            this.educationRepository = new EducationRepository();
        }
        return this.educationRepository;
    }

    static getProjectRepository(): IProjectRepository {
        if (!this.projectRepository) {
            this.projectRepository = new ProjectRepository();
        }
        return this.projectRepository;
    }

    static getCertificateRepository(): ICertificateRepository {
        if (!this.certificateRepository) {
            this.certificateRepository = new CertificateRepository();
        }
        return this.certificateRepository;
    }

    static getLinkRepository(): ILinkRepository {
        if (!this.linkRepository) {
            this.linkRepository = new LinkRepository();
        }
        return this.linkRepository;
    }
}