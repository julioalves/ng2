import {Component} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private api: ApiService, private router:Router)
    {
        if (isNullOrUndefined(this.api.getUser()))
        {
            this.router.navigateByUrl('auth/login');
        }
    }


}
