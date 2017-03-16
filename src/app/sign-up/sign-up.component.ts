import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private user = {'name':'', email: '', password: ''};
    private message:string = '';

    constructor(private apiService: ApiService) {
    }

    signUp() {
        let self = this;
        this.apiService.register(self.user.name, self.user.email, self.user.password)
            .then(function(res){
                if (res.status)
                {
                    console.log(res);
                }
                else {
                    console.log(res);
                }
            });

    }

    ngOnInit() {
    }

}
