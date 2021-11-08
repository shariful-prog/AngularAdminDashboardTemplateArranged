import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Notyf } from 'notyf';
import { NotyfyService } from 'src/app/_helpers/notyfy.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle('Dashboard');
    }

    ngOnInit(): void {

    }

}
