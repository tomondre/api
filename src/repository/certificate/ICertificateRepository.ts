import Certificate from "../../model/Certificate";

export interface ICertificateRepository {
    getCertificates(): Promise<Certificate[]>;
    createCertificate(certificate: Certificate): Promise<Certificate>;
}