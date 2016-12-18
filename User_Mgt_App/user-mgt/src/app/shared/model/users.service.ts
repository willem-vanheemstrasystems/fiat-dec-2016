import { Injectable } from '@angular/core';

var users = [
    {
        $key: "37894941d90b4e88a8754cc5976a9b0e",
        firstname: "John",
        lastname: "Doe"    
    },
    {
        $key: "cba2b67adecc45fa8e7c90de6ab0e898",
        firstname: "Jane",
        lastname: "Doe" 
    }
];

@Injectable()
export class UsersService {

  private users; 

  constructor() {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }

}
