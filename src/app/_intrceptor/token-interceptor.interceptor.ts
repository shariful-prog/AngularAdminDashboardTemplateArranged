import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {


  // currentUser:string = "";
  currentUserToken: any;
  constructor(private router: Router) {


    this.currentUserToken = localStorage.getItem('currentUserToken') === undefined ? "" : localStorage.getItem('currentUserToken')?.toString();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.currentUserToken != '') {
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.currentUserToken)
      });

      return next.handle(clonedReq).pipe(
        tap(
          succ => { },
          err => {
            if (err.status == 401) {
              localStorage.removeItem('currentUserToken');
              this.router.navigateByUrl('login');
            }
          }
        )
      )
    }
    else
      return next.handle(request.clone());
  }
}
