import Education from "../../model/Education";

export interface IEducationRepository {
    getEducations(): Promise<Education[]>;
    createEducation(body: Education): Promise<Education>;
}