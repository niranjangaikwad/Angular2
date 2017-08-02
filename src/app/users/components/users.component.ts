import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector : 'user-list',
    templateUrl : 'app/users/views/users.component.html',
    styles: [`
        .clsTd { background: #fcc; }
        .clsTh { background: #aaa; }
    `]
})

export class UsersList {
    title : string = 'Users list imported using http service';
    users : any;

    constructor(private _usersService : UsersService) {};

    getAllUsers() {
        this._usersService.getAllUsers().subscribe(data => this.users = data, 
            error => alert(error), 
            () => console.log('Completed'));
    }

    ngOnInit() {
        this.getAllUsers();
    }
}