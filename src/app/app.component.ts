import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

    private user;
    constructor(private api: ApiService)
    {
    }

    userExists()
    {
        this.user = this.api.getUser();
        return (!(isNullOrUndefined(this.user)));
    }

    logout()
    {
        this.api.setUser(null)
    }

}
