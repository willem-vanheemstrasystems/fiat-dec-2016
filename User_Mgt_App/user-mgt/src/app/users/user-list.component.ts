import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UsersService } from '../shared/model/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  users: User[];  
    
  constructor(private usersService: UsersService) { 
    this.users = this.usersService.getUsers();
  }    
      
  ngOnInit() {
  }

}
