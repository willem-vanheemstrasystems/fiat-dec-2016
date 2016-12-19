import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UsersService } from '../shared/model/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService]
})
export class HomeComponent implements OnInit {

  users: User[];  
    
  constructor(private usersService: UsersService) { 
    this.users = this.usersService.getUsers();
  }    
      
  ngOnInit() {
  }

}
