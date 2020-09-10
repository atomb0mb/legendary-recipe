export class User {
    constructor(public username: string, public id: string, private _token: string, private _tokenExpiration: Date ){}

    get token(){
        // if this doesn't exist or current date greater than this token expiration date
        if(!this._tokenExpiration || new Date() > this._tokenExpiration ){
            return null;
        }
        return this._token;
    }
}