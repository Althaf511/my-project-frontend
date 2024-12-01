import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username: string = '';
  password: string = '';
  users: { username: string, password: string }[] = []; // Array to hold user details

  constructor() {}

  ngOnInit(): void {}

  onRegister() {
    // Check if the username already exists
    const userExists = this.users.some(user => user.username === this.username);

    if (userExists) {
      console.log('User already exists!'); // You can show an alert or message here
      return; // Exit the function if the user already exists
    }

    // Add the username and password to the users array
    this.users.push({ username: this.username, password: this.password });
    
    // Reset the input fields after registration
    this.username = '';
    this.password = '';
    
    console.log(this.users); // For debugging purposes
  }
}
