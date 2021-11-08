import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable()
export class JWTTokenService {

    jwtToken: string = '';
    decodedToken: { [key: string]: string; } | undefined;

    constructor() { }

    setToken(token: string) {
        if (token) {
            this.jwtToken = token;
        }
    }

    decodeToken() {
        if (this.jwtToken) {
            this.decodedToken = jwt_decode(this.jwtToken);
        }
    }

    getDecodeToken() {
        return jwt_decode(this.jwtToken);
    }

    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.displayname : null;
    }

    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    }

    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? parseInt(this.decodedToken.exp) : 0;
    }

    isTokenExpired(): boolean {
        const expiryTime: number = this.getExpiryTime();
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        } else {
            return false;
        }
    }

    isTokenValid(token: string): boolean {
        this.decodedToken = jwt_decode(token);
        const expiryTime: number = this.decodedToken ? parseInt(this.decodedToken.exp) : 0;
        if (expiryTime) {
            return ((1000 * expiryTime) - 5000 > (new Date()).getTime());
        } else {
            return false;
        }
    }
}