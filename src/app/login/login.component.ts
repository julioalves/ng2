import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private user = {'name': '', email: '', password: ''};
    private message: string = '';

    constructor(private apiService: ApiService, private router: Router) {
    }

    signIn() {
        let self = this;
        this.apiService.login(self.user.email, self.user.password)
            .then(function (res) {
                if (res.status) {
                    console.log(res.data);
                    self.apiService.setUser(res.data);
                    self.user = {'name': '', email: '', password: ''};
                    self.router.navigateByUrl('home');
                }
                else {
                    console.log(res);
                    self.message = res.data;
                }
            });

    }

    ngOnInit() {
    }

}
