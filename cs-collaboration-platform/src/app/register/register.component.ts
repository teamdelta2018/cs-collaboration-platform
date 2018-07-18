import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  signUp(email:string, username: string, password:string, adminkey: string) {
    console.log(email, username, password, adminkey);

    this.authService.signup(email, password);
  }

  ngOnInit() {
  }

}
