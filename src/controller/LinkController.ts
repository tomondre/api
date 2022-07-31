import {ILinkRepository} from "../repository/link/ILinkRepository";
import RepositoryProvider from "../helper/RepositoryProvider";
import {Request, Response} from "express";
import Link from "../model/Link";

export default class LinkController {
    private linkRepository: ILinkRepository;

    constructor() {
        this.linkRepository = RepositoryProvider.getLinkRepository();
    }

    async getLinks(req: Request, res: Response) {
        try {
            let links = await this.linkRepository.getLinks();
            res.json(links);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async createLink(req: Request, res: Response) {
        try {
            let link = new Link(req.body.description, req.body.url);
            let created = await this.linkRepository.createLink(link);
            res.json(created);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}