import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  items: Observable<any[]>;
  current: Observable<any[]>;
  public data: Array<any> =[];
  allowed:boolean = false;
  present:boolean = false;
  validEmail:boolean = false;
  validUsername:boolean = false;
  admin:boolean = false;
  database: AngularFirestore;
  constructor(db: AngularFirestore) { 

   

  this.items = db.collection('users').valueChanges();
	this.database = db;
   
  }

  checkForUser(email: string, username: string, admin: string) {
    var present = false;
    let emailTaken = false;
    let usernameTaken = false;
    this.current = this.database.collection('users').valueChanges();
    var derp = this.current.toPromise()
    .then((response) => response);
    console.log(derp)
    this.current.subscribe(data=>{
      var count = 0;
      data.forEach(function (value) {
        if ((value.email == email) || (value.username == username)) {
          //console.log("user found", email);
          present = true;
          if (value.username == username) {
            console.log("username taken");
            usernameTaken = true;
      
          }
          if (value.email == email) {
            console.log("email taken");
            emailTaken = true; 
          }
          ;
        }
        count++;
      });
      this.validUsername = !usernameTaken;
      this.validEmail = !emailTaken;
      if (present) {
        this.allowed = false;


      }
      else {
        console.log("allowed to add");
        var holder = email.split("@");
        console.log(holder);
        //var pattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
        //console.log(email.search);
        
        var re = new RegExp("^([a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,})$");
       if (re.test(email)) {
         console.log("Valid email", email);
         
       } else {
         console.log("Invalid email", email);
         this.validEmail = false;
       }
        this.allowed = true;

      }
     
      
    });
    
  }

  addUser (email: string, username: string, admin: string) {

    
    this.database.collection("users").doc(email).set({
        email: email,
        username: username,
        admin: true
    })
    .then(function() {
        console.log("Document successfully written!", email);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    this.allowed = false;

  }

  
  
  ngOnInit() {
  }

}
