import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { AuthenticationService } from '../../_services/authentication.service';
import { GenericModel } from 'src/app/model/generic-model/generic-model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @BlockUI() blockUI!: NgBlockUI;
    modelForm: FormGroup;
    genericModel = new GenericModel();
    submitted = false;
    errorMessage = '';


    constructor(
        private titleService: Title
        , private formBuilder: FormBuilder
        , private router: Router
        , private authenticationService: AuthenticationService
    ) {
        this.titleService.setTitle('Login');

        this.modelForm = this.formBuilder.group({
            UserName: [this.genericModel.UserName, [Validators.required, Validators.maxLength(100), Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_]+?\.)([a-zA-Z]{2,3})(\]?)$/)]],
            Password: [this.genericModel.Password, [Validators.required, Validators.maxLength(15)]],
        });


    }

    ngOnInit(): void { }

    get f() {
        return this.modelForm.controls;
    }

    async login() {
        this.submitted = true;
        const controlList = this.modelForm.controls;
        this.errorMessage = '';

        if (this.modelForm.invalid) {
            return;
        }

        this.genericModel.UserName = controlList.UserName.value;
        this.genericModel.Password = controlList.Password.value;

        this.blockUI.start('Wait...');

        // await this.authenticationService.login(obj).then(
        //     res => {
        //         if (res) {
        //             this.submitted = false;
        //             this.modelForm.controls.Email.setValue(null);
        //             this.modelForm.controls.Password.setValue(false);
        //             // ridirect to home
        //         }
        //     }
        // )

        this.submitted = false;
        this.modelForm.controls.UserName.setValue(null);
        this.modelForm.controls.Password.setValue(false)
        // ridirect to home
        // this.router.navigate(['admin/dashboard']);
        this.router.navigateByUrl('admin');


        this.errorMessage = 'Invalid username or password.';

        this.blockUI.stop();





    }
}