export class User {
    private _userId: string;
    private _userName: string;

    get userId() {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get userName() {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    constructor() {
        this._userId = "";
        this._userName = "";
    }
}