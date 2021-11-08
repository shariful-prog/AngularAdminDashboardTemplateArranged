import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
    public currentUserToken: BehaviorSubject<any> | undefined;

    constructor(private http: HttpClient) {
    }

    getList(url: string) {
        return this.http.get<any>(environment.apiUrl + url).pipe(
            map(res => {
                return res;
            })
        );
    }

    createList(url: string, params: any) {
        return this.http.post<any>(environment.apiUrl + url, params).pipe(
            map(res => {
                return res;
            })
        );
    }

    query(url: string): Observable<any[]> {
        return this.http.get<any>(environment.apiUrl + url).pipe(
            map(res => {
                return res;
            })
        );
    }

    downloadFile(url: string): any {
        return this.http.get(environment.apiUrl + url, { responseType: 'blob' })
            .pipe(
                map((result: any) => {
                    return result;
                })
            );
    }

    getListByAuth(url: string) {
        this.currentUserToken = new BehaviorSubject<any>(localStorage.getItem('currentUserToken'));
        // var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.currentUserToken.value);
        var headersObject = new HttpHeaders({
            'Authorization': "Bearer " + this.currentUserToken.value
        });

        var httpOptions = {
            headers: headersObject
        };
        return this.http.get<any>(environment.apiUrl + url, httpOptions).pipe(
            map(res => {
                return res;
            })
        );
    }
    postWithParamsByAuth(url: string) {
        this.currentUserToken = new BehaviorSubject<any>(localStorage.getItem('currentUserToken'));
        // var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.currentUserToken.value);
        var headersObject = new HttpHeaders({
            'Authorization': "Bearer " + this.currentUserToken.value
        });

        var httpOptions = {
            headers: headersObject
        };

        return this.http.post<any>(environment.apiUrl + url, null, httpOptions).pipe(
            map(res => {
                return res;
            })
        );
    }
    postWithFormDataByAuth(url: string, formData: any) {
        this.currentUserToken = new BehaviorSubject<any>(localStorage.getItem('currentUserToken'));
        var headersObject = new HttpHeaders({ 'Authorization': "Bearer " + this.currentUserToken.value });
        var httpOptions = { headers: headersObject };

        return this.http.post<any>(environment.apiUrl + url, formData, httpOptions).pipe(
            map(res => {
                return res;
            })
        );
    }

}
