import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedVariable } from './shared-variable';

@Injectable({
    providedIn: 'root'
})
export class SearchHelperService {


    private eventToggle = new BehaviorSubject<Event | null>(null);
    event = this.eventToggle.asObservable();

    constructor(public sharedValiable: SharedVariable) { }

    searchHelper(event: any, searchKey: string) {
        debugger;
        this.sharedValiable.searchKey = searchKey;
        this.eventToggle.next(event);
    }
}
