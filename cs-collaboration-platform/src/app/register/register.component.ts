
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items: Observable<any[]>;
  responses: Observable<any[]>;
  test: Observable<any[]>;
  database: AngularFirestore;
  showEdit: boolean = false;
  constructor(public authService: AuthService, public db: AngularFirestore) {
    this.database = db;
   }

  signUp(email:string, username: string, password:string, adminkey: string) {
    console.log(email, username, password, adminkey);
    this.authService.signup(email, password);
    

    //this.authService.signup(email, password);
  }

  addToDB(email:string, username: string, password:string, adminkey: string) {
    this.database.collection("users").doc(email).set({
      email: email,
      username: username,
      admin: true,
      postcount: 0,
      responsecount: 0
  })
  .then(function() {
      console.log("Document successfully written!", email);
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  ngOnInit() {
  }

}
