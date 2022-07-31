import {PrismaClient} from "@prisma/client";
import PrismaClientProvider from "../../helper/PrismaClientProvider";
import Link from "../../model/Link";

export default class LinkRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getLinks(): Promise<Link[]> {
        let links = await this.prismaClient.link.findMany({
            where: {
                educationId: null,
                projectId: null,
                workExperienceId: null
            }
        });

        links.forEach(link => {
            // @ts-ignore
            delete link['id'];
           // @ts-ignore
            delete link['workExperienceId'];
           // @ts-ignore
            delete link['educationId'];
           // @ts-ignore
            delete link['projectId'];
        });

        // @ts-ignore
        return links;
    }

    async createLink(link: Link): Promise<Link> {
        // @ts-ignore
        return await this.prismaClient.link.create({
            data: {
                description: link.description,
                url: link.url
            }
        });
    }
}