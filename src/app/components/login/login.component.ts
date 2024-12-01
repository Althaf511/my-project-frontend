import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

   users = [
    { username: 'althaf', password: 'althaf123' },
    { username: 'john', password: 'john456' },
    { username: 'doe', password: 'doe789' }
  ];
  

  constructor(public router: Router) { }

  ngOnInit(): void { }

  onLogin() {

    // this.router.navigateByUrl("/home")
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    // Replace with real authentication logic
    if (user) { 
      this.router.navigateByUrl("/home"); 
    } else {
      alert('account not exist or invalid credantials');
    }
  }

  onSignUp(){
    this.router.navigateByUrl("/signup")
  }
}
