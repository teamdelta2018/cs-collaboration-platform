import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
  
   googleSignIn() {
    this.authService.google();
  }

  getuser() {
   console.log(this.authService.getuser());
  }

  ngOnInit() {
  }
}
