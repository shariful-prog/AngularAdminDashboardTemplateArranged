import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

export class SharedVariable {
    isLoggedIn$: boolean = false;
    userInfo = {
        id: ''
        , name: ''
        , email: ''
        , image: ''
    };
    menuActivebyChild: string;
    searchKey: string;

    globalLoginUpdate$: Observable<any>;
    private _observer: Observer<any> | undefined;

    constructor() {
        this.isLoggedIn$ = false;
        this.menuActivebyChild = '';
        this.searchKey = '';

        this.globalLoginUpdate$ = new Observable(observer =>
            this._observer = observer
        );
    }

    updateLoggedIn(value: boolean, user: { id: string; name: string; email: string; image: string; }) {
        this.isLoggedIn$ = value;
        this.userInfo = user;
    }

    isLoggedIn() {
        return this.isLoggedIn$;
    }

    updateActiveMenu(value: string) {
        this.menuActivebyChild = value;
    }
};