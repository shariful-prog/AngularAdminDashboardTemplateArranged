import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/_shared/menu-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    constructor(public menuItems:MenuItems) { }

    ngOnInit(): void {
      
     }
}
