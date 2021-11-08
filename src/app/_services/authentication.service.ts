import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { SharedVariable } from '../_helpers/shared-variable';
import { ToasterNotificationService } from '../_helpers/toaster.service';
import { JWTTokenService } from '../_helpers/jwt-token.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUser: BehaviorSubject<any>;
    public currentUserToken: BehaviorSubject<any>;

    userInfo = {
        id: ''
        , name: ''
        , email: ''
        , image: ''
    };
    successfulMessage = 'Login successful';
    errorMessage = 'Somethingwent wrong';

    constructor(
        private http: HttpClient
        , private _sharedVariable: SharedVariable
        , private notifyService: ToasterNotificationService
        , private jwtTokenService: JWTTokenService
        , private router: Router
    ) {
        this.currentUser = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
        this.currentUserToken = new BehaviorSubject<any>(localStorage.getItem('currentUserToken'));

        if (this.currentUserToken.value != null && this.jwtTokenService.isTokenValid(this.currentUserToken.value)) {
            if (this.currentUser.value != null) {
                this.userInfo.email = JSON.parse(this.currentUser.value)['Email'];
                this.userInfo.name = JSON.parse(this.currentUser.value)['FullName'];

                const userImg = JSON.parse(this.currentUser.value)['ImageUrl'];
                const userImgName = JSON.parse(this.currentUser.value)['ImageName'];

                this.userInfo.image = ((userImg === '' || userImg === null) && (userImgName === '' || userImgName === null))
                    ? environment.imageUrl + '/user/profile-photo.png' : userImg;

                this._sharedVariable.updateLoggedIn(true, this.userInfo);
            }
        }
        else {
            localStorage.removeItem('currentUser')
            localStorage.removeItem('currentUserToken')
        }
    }

    public get currentUserValue(): any {
        return this.currentUser.value;
    }

    async registration(obj: any) {
        let flag = false;
        const response = await this.http.post<any>(environment.apiUrl + 'account/register', obj).toPromise();
        if (response.Status === true) {
            this.steUserInfo(response.Data, response.Token);
            flag = true;
        } else {
            this.notifyService.showError('Error', response.Message);
            flag = false;
        }
        return flag;
    }

    async login(obj: any) {
        let flag = false;
        const response = await this.http.post<any>(environment.apiUrl + 'account/login', obj).toPromise();
        if (response.Status === true) {
            this.steUserInfo(response.Data, response.Token);
            flag = true;
        } else {
            this.notifyService.showError('Error', response.Message);
            flag = false;
        }
        return flag;
    }

    logout() {
        if (this.router.url == 'matprofile') this.router.navigate(['home']);
        localStorage.removeItem('currentUser')
        localStorage.removeItem('currentUserToken')
        this.currentUser = new BehaviorSubject<any>('');
        this.currentUserToken = new BehaviorSubject<any>('');
        this._sharedVariable.updateLoggedIn(false, this.userInfo);
    }

    private steUserInfo(data: any, token: any) {
        this.userInfo.email = data.Email;
        this.userInfo.name = data.FullName;

        const userImg = data.ImageUrl;
        const userImgName = data.ImageName;

        this.userInfo.image = ((userImg === '' || userImg === null) && (userImgName === '' || userImgName === null))
            ? environment.imageUrl + '/user/profile-photo.png' : userImg;

        this._sharedVariable.updateLoggedIn(true, this.userInfo);

        this._sharedVariable.updateLoggedIn(true, this.userInfo);

        this.notifyService.showSuccess('Success', this.successfulMessage);

        localStorage.setItem('currentUser', JSON.stringify(data));
        localStorage.setItem('currentUserToken', token);

        this.currentUser = new BehaviorSubject<any>(JSON.stringify(data));
        this.currentUserToken = new BehaviorSubject<any>(token);
    }

}
