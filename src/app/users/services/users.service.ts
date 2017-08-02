import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

@Injectable()

export class UsersService {
    constructor(private http : Http) {}
    private postDataUrl = "https://jsonplaceholder.typicode.com/users";
    getAllUsers() {
        return this.http.get(this.postDataUrl).map(res => res.json());
    }
}



