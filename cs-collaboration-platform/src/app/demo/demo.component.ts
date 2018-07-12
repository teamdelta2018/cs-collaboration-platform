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
  allowed = false;
  present = false;
  database: AngularFirestore;
  constructor(db: AngularFirestore) { 

   

  this.items = db.collection('users').valueChanges();
	this.database = db;
   
  }

  checkForUser(email: string, username: string, admin: string) {
    var present = false;
    this.current = this.database.collection('users').valueChanges();
    this.current.subscribe(data=>{
      var count = 0;
      data.forEach(function (value) {
        if (value.email == email) {
          //console.log("user found", email);
          present = true;
          
          ;
        }
        count++;
      });
      if (present) {
        console.log(email, " already present, cannot add!!")
        this.allowed = false;

      }
      else {
        console.log(email, " not found, allowed to add!!")
        this.allowed = true;

      }
     
      
    });
    
  }

  addUser (email: string, username: string, admin: string) {

    

    console.log("this user is getting added", email);
    this.database.collection("users").doc(email).set({
        email: email,
        username: username,
        admin: true
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    this.allowed = false;

  }
  
  ngOnInit() {
  }

}
