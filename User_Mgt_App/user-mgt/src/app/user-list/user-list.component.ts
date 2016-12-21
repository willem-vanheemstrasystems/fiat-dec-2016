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

    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {
    }

    ngOnInit() {
        this.users = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.usersService.getUsers();
            });
    }

    isSelected(user: User) {
        return user.id === this.selectedId;
    }

    onSelect(user: User) {
        this.router.navigate(['/user', user.id]);
    }

}
