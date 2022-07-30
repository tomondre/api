import WorkExperience from "../../model/WorkExperience";

export interface IWorkExperienceRepository {
    getAllWorkExperience(): Promise<WorkExperience[]>;
    createWorkExperience(workExperience: WorkExperience): Promise<WorkExperience>;
}