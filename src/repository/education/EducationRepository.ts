import {IEducationRepository} from "./IEducationRepository";
import {PrismaClient} from "@prisma/client/scripts/default-index";
import PrismaClientProvider from "../../helper/PrismaClientProvider";
import Education from "../../model/Education";
import Activity from "../../model/Activity";
import Link from "../../model/Link";

export default class EducationRepository implements IEducationRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getEducations(): Promise<Education[]> {
        let educations = await this.prismaClient.education.findMany({
            include: {
                activities: true,
                links: true,
                location: true
            },
            orderBy: {
                startDate: "desc"
            }
        });

        educations.forEach((education: Education) => {
            // @ts-ignore
            delete education['id'];
            // @ts-ignore
            delete education['locationId'];
            // @ts-ignore
            delete education.location['id'];

            education.activities.forEach((activity: Activity) => {
                // @ts-ignore
                delete activity['id'];
                // @ts-ignore
                delete activity['educationId'];
            })

            education.links.forEach((link: Link) => {
                // @ts-ignore
                delete link['id'];
                // @ts-ignore
                delete link['educationId'];
                // @ts-ignore
                delete link['workExperienceId'];
            })
        });


        return educations;
    }

    async createEducation(body: Education): Promise<Education> {
        let education = await this.prismaClient.education.create({
            data: {
                school: body.school,
                degree: body.degree,
                fieldOfStudy: body.fieldOfStudy,
                isCurrent: body.isCurrent,
                startDate: body.startDate,
                endDate: body.endDate,
                location: {
                    connectOrCreate: {
                        where: {
                            city_country: {
                                city: body.location.city,
                                country: body.location.country
                            }
                        },
                        create: {
                            city: body.location.city,
                            country: body.location.country
                        }
                    }
                },
                activities: {
                    createMany: {
                        data: body.activities
                    }
                },
                links: {
                    createMany: {
                        data: body.links
                    }
                }
            }
        });
        return education;
    }
}