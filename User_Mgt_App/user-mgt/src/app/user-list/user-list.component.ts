import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/model/user';
import { UsersService } from '../shared/model/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [UsersService]
})

export class UserListComponent implements OnInit {

    users: Observable<User[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {
        this.users = this.usersService.getUsers();
    }

    ngOnInit() {
    }

    onSelect(user: User) {
        this.router.navigate(['/user', user.id]);
    }

}
