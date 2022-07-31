import IProjectRepository from "./IProjectRepository";
import {PrismaClient} from "@prisma/client";
import PrismaClientProvider from "../../helper/PrismaClientProvider";
import Project from "../../model/Project";

export default class ProjectRepository implements IProjectRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getProjects(): Promise<Project[]> {
        let projects = await this.prismaClient.project.findMany({
            include: {
                location: true,
                links: true,
                technologies: true
            },
            orderBy: {
                startDate: "desc"
            }
        });

        projects.forEach(project => {
            // @ts-ignore
            delete project['id']
            // @ts-ignore
            delete project['locationId']
            // @ts-ignore
            delete project.location['id']

            // @ts-ignore
            project.technologies.forEach(technology => {
                    // @ts-ignore
                    delete technology['id'];
                    // @ts-ignore
                    delete technology['projectId'];
                }
            );

            project.links.forEach(link => {
                // @ts-ignore
                delete link['id'];
                // @ts-ignore
                delete link['projectId'];
            });
        });

        // @ts-ignore
        return projects;
    }

    async createProject(project: Project): Promise<Project> {
        // @ts-ignore
        return await this.prismaClient.project.create({
            data: {
                name: project.name,
                description: project.description,
                status: project.status,
                category: project.category,
                client: project.client,
                startDate: project.startDate,
                endDate: project.endDate,
                location: {
                    connectOrCreate: {
                        where: {
                            city_country: {
                                city: project.location.city,
                                country: project.location.country
                            }
                        },
                        create: {
                            city: project.location.city,
                            country: project.location.country
                        }
                    }
                },
                links: {
                    createMany: {
                        data: project.links
                    }
                },
                technologies: {
                    createMany: {
                        data: project.technologies
                    }
                }
            }
        });
    }
}