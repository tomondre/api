import {IDeploymentsRepository} from "./IDeploymentsRepository";
import Deployment from "../../model/Deployment";
import {PrismaClient} from "@prisma/client";
import PrismaClientProvider from "../../helper/PrismaClientProvider";

export default class DeploymentsRepository implements IDeploymentsRepository {

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getDeployments(): Promise<Deployment[]> {
        // @ts-ignore
        return this.prismaClient.deployment.findMany({
            orderBy: {
                deployedOn: 'desc'
            }
        });
    }

    async createDeployment(body: Deployment): Promise<Deployment> {
        console.log(body.deployedOn);
        // @ts-ignore
        return this.prismaClient.deployment.create({
            data: {
                name: body.name,
                deployedOn: body.deployedOn,
                description: body.description,
                url: body.url
            }
        });
    }
}