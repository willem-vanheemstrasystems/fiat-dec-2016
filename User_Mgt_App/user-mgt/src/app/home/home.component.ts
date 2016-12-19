import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/model/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService]
})
export class HomeComponent implements OnInit {

  constructor(private usersService: UsersService) { 
  
  }

  ngOnInit() {
  }

}
