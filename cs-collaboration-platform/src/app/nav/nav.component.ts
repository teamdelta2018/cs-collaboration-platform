import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  email: string;
  password: string;
  
  constructor(public authService: AuthService) { }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
  
   //printtoken() {
    //this.authService.printtoken();
  //}
  
   googleSignIn() {
    this.authService.google();
  }
  getuser() {
    this.authService.getuser();
  }
  ngOnInit() {
  }
}
