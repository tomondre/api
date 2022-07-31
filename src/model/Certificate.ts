export default class Certificate {
    private _name: string;
    private _organization: string;
    private _issuedDate: Date;
    private _expiryDate: Date;
    private _credentialId: string;
    private _url: string;

    constructor(name: string, organization: string, issuedDate: Date, expiryDate: Date, credentialId: string, url: string) {
        this._name = name;
        this._organization = organization;
        this._issuedDate = issuedDate;
        this._expiryDate = expiryDate;
        this._credentialId = credentialId;
        this._url = url;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get organization(): string {
        return this._organization;
    }

    set organization(value: string) {
        this._organization = value;
    }

    get issuedDate(): Date {
        return this._issuedDate;
    }

    set issuedDate(value: Date) {
        this._issuedDate = value;
    }

    get expiryDate(): Date {
        return this._expiryDate;
    }

    set expiryDate(value: Date) {
        this._expiryDate = value;
    }

    get credentialId(): string {
        return this._credentialId;
    }

    set credentialId(value: string) {
        this._credentialId = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}