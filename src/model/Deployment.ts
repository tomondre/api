import e from "express";
import {IsDate} from "class-validator";

export default class Deployment {
    private _id: number = 0;
    private _name: string;
    private _description: string;
    private _deployedOn: Date;
    private _repoUrl: string;
    private _url: string;
    private _healthUrl: string;

    constructor(id: number, name: string, description: string, deployedOn: Date, repoUrl: string, url: string, healthUrl: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._deployedOn = deployedOn;
        this._repoUrl = repoUrl;
        this._url = url;
        this._healthUrl = healthUrl;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get deployedOn(): Date {
        return this._deployedOn;
    }

    set deployedOn(value: Date) {
        this._deployedOn = value;
    }

    get repoUrl(): string {
        return this._repoUrl;
    }

    set repoUrl(value: string) {
        this._repoUrl = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get healthUrl(): string {
        return this._healthUrl;
    }

    set healthUrl(value: string) {
        this._healthUrl = value;
    }
}