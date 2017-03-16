import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private urlRegister = 'http://127.0.0.1:8000/api/register';
    private urlSignIn = 'http://127.0.0.1:8000/api/login';

    constructor(private http: Http) {

    }

    public register(name:string, email:string, password:string):any
    {
        this.headers.append('Content-Type', 'application/json');

        return this.http.post(this.urlRegister, {'name':name, 'email': email, 'password': password}, {headers:this.headers})
            .toPromise().then(res => res.json());
    }

    public login(email:string, password:string):any
    {
        this.headers.append('Content-Type', 'application/json');

        return this.http.post(this.urlSignIn, {'email': email, 'password': password}, {headers:this.headers})
            .toPromise().then(res => res.json());
    }

    setUser(user){
        if (user==null) {
            window.sessionStorage.removeItem('user');
            return;
        }
        window.sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(window.sessionStorage.getItem('user'));
    }


}
