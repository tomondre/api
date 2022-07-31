import Link from "../../model/Link";

export interface ILinkRepository {
    getLinks(): Promise<Link[]>;
    createLink(link: Link): Promise<Link>;
}