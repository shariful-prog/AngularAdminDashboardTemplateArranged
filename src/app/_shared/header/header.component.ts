import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    toggleClick(){       
   
        var domRepresentation = document.getElementById('sidebar');
        console.dir(domRepresentation!.className);
        if(domRepresentation!.className =="sidebar js-sidebar"){  
            domRepresentation!.classList.add("collapsed");
        }else{
            domRepresentation!.classList.remove("collapsed");
        }

    
        var cName = document.getElementById('sidebar');
        console.dir(cName!.className);
    }
}
