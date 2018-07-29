import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  adminStatus: boolean = false;
  items: Observable<any[]>;
  auth: AuthService;
  constructor(public authService: AuthService, public db: AngularFirestore) { 
    this.items = db.collection('users').valueChanges();
    this.auth = authService;
  }
   
  logout() {
    this.authService.logout();
  }
  
   googleSignIn() {
    this.authService.google();
  }

  getuser() {
   console.log(this.authService.getuser());
  }
  getAdminStatus (email: string) {
      var currentcount = 0;
      var emailhold = "";
      this.items.subscribe(data=> {
        //console.log("users", data);
        for (var i = 0; i < (data.length); i++) {
          var user = data[i];
          //console.log(i, user.email); 
          if (user.email == email) {
            console.log(user.email, " admin status is : ", user.admin);
            this.adminStatus = user.admin;
           
            
          }
        }
        
      });
    
    return this.adminStatus;
     
  }
  
  ngOnInit() {
    
  }

}
