
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
    alert("Dont leave this page!!!! " + username + "   Click ADD TO DB Button, Click OK in confirmation message" )
    

    //this.authService.signup(email, password);
  }

  addToDB(email:string, username: string, password:string, adminkey: string) {
    let adminStatus = false;
    if (adminkey === "123456789") {
      adminStatus = true;
      console.log("Admin Key : " + adminkey + " is  valid.")
      alert("Admin Key : " + adminkey + " is  valid.")
    }
    else {
      console.log("Admin Key : " + adminkey + " is not valid.")
      alert("Admin Key : " + adminkey + " is not valid.")
    }
    this.database.collection("users").doc(email).set({
      email: email,
      username: username,
      admin: adminStatus,
      postcount: 0,
      responsecount: 0
  })
  .then(function() {
      console.log("Document successfully written! Admin status is ", adminStatus, email);
      alert(username + " added to database! Admin status is  " + adminStatus + "   Email is : " + email);
      window.location.reload()
      
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  ngOnInit() {
  }

}
