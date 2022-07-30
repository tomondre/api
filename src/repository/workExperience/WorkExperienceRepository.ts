import {IWorkExperienceRepository} from "./IWorkExperienceRepository";
import {PrismaClient} from "@prisma/client";
import PrismaClientProvider from "../../helper/PrismaClientProvider";
import WorkExperience from "../../model/WorkExperience";
import WorkExperienceRoutes from "../../routes/WorkExperienceRoutes";

export default class WorkExperienceRepository implements IWorkExperienceRepository{

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getAllWorkExperience(): Promise<WorkExperience[]> {
        let workExperiences = await this.prismaClient.workExperience.findMany({
            include: {
                location: true,
                links: true,
                responsibilities: true
            },
            orderBy: {
                startDate: "desc"
            }
        });

        workExperiences.forEach(workExperience => {
            // @ts-ignore
            delete workExperience['id']
            // @ts-ignore
            delete workExperience['locationId']
            // @ts-ignore
            delete workExperience.location['id']

            // @ts-ignore
            workExperience.responsibilities.forEach(responsibility => {
                // @ts-ignore
                delete responsibility['id'];
                // @ts-ignore
                delete responsibility['workExperienceId'];
            });

            workExperience.links.forEach(link => {
                // @ts-ignore
                delete link['id']
                // @ts-ignore
                delete link['workExperienceId'];
            });
        })

        // @ts-ignore
        return workExperiences;
    }

    async createWorkExperience(workExperience: WorkExperience): Promise<WorkExperience> {
        let create = await this.prismaClient.workExperience.create({
            data: {
                company: workExperience.company,
                position: workExperience.position,
                startDate: workExperience.startDate,
                endDate: workExperience.endDate,
                isCurrent: workExperience.isCurrent,
                employmentType: workExperience.employmentType,
                location: {
                    connectOrCreate: {
                        where: {
                            city_country: {
                                country: workExperience.location.country,
                                city: workExperience.location.city
                            }
                        },
                        create: {
                            city: workExperience.location.city,
                            country: workExperience.location.country
                        }
                    }
                },
                links: {
                    createMany: {
                        data: workExperience.links
                    }
                },
                responsibilities: {
                    createMany: {
                        data: workExperience.responsibilities
                    }
                }

            }
        });
        // @ts-ignore
        return create;
    }
}