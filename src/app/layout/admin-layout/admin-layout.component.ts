import { Component, ElementRef, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent implements OnInit {
    title = 'Admin Panel';

    constructor(private ngxLoader: NgxUiLoaderService) { }

    ngOnInit(): void {
        this.ngxLoader.start();
        setTimeout(() => {
            window.scrollTo(0, 0)
            this.ngxLoader.stop();
        }, 3000);

        // this.router.events.subscribe((evt) => {
        //     if (!(evt instanceof NavigationEnd)) {
        //         return;
        //     }
        //     window.scrollTo(0, 0)
        // });
    }
}