import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import * as $ from 'jquery';

import { AuthenticationService } from '../_services/authentication.service';
import { JWTTokenService } from './jwt-token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
        , private authenticationService: AuthenticationService
        , private jwtTokenService: JWTTokenService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.authenticationService.currentUserToken.value;
        // debugger;
        // console.log(token);
        if (token != "" && token != null) {
            if (this.jwtTokenService.isTokenValid(token)) {
                // logged in so return true
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/admin/login']);
        this.loginPopUp();
        return false;
    }

    private loginPopUp() {
        // var container = $('.accountbox-wrapper');
        // $('<div class="body-overlay"></div>').prependTo(container);

        // container.addClass('is-visible');

        // $('span.accountbox-close-button').on('click', function () {
        //     $('div').remove('.body-overlay');
        //     container.removeClass('is-visible');
        // });
    };
}