import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../_services/authentication.service';
import { NotyfyService } from './notyfy.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, public notyfy:NotyfyService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status == 400) {
                this.notyfy.showError('Unauthorized request found');
            } else if (err.status === 401) {
                this.notyfy.showError('Invalid User Name Or Password');
            }else if(err.status == 404){
                this.notyfy.showError('Invalid Request URL');
            }else{
                this.notyfy.showError('Something went wrong... Please try again');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
    
}