import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notyf } from 'notyf';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(public commonSer:CommonService) { }

  ngOnInit(): void {
    this.getTestResult();
  }


  
  getTestResult(){

    this.commonSer.getList("Test").subscribe(
      (response) => { console.log(response) },
      (error) => { console.log(error); });
    };

  }

