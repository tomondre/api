import {ICertificateRepository} from "./ICertificateRepository";
import {PrismaClient} from "@prisma/client";
import PrismaClientProvider from "../../helper/PrismaClientProvider";
import Certificate from "../../model/Certificate";

export default class CertificateRepository implements ICertificateRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async getCertificates(): Promise<Certificate[]> {
        // @ts-ignore
        return await this.prismaClient.certificate.findMany();
    }

    async createCertificate(certificate: Certificate): Promise<Certificate> {
        // @ts-ignore
        return await this.prismaClient.certificate.create({
            data: {
                name: certificate.name,
                organization: certificate.organization,
                issuedDate: certificate.issuedDate,
                expiryDate: certificate.expiryDate,
                credentialId: certificate.credentialId,
                url: certificate.url
            }
        });
    }
}