import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Boilerplate';

    constructor(
        private ngxLoader: NgxUiLoaderService
    ) { }

    ngOnInit() {
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
