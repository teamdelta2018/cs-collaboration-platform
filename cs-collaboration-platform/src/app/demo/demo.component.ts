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
  database: AngularFirestore;
  constructor(db: AngularFirestore) { 

   

  this.items = db.collection('users').valueChanges();
	this.database = db;
   
  }

  checkForUser(email: string, username: string, admin: string) {
    var present = false;
	  console.log("check user got: ", email);
    this.current = this.database.collection('users').valueChanges();
    this.current.subscribe(data=>{
      console.log(data)
      data.forEach(function (value) {
        console.log(value.email);
        if (value.email == email) {
          console.log("user found")
          present = true;
          ;
        }
      });
      if (!present) {

        console.log("this user is getting added")
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

      }
      
    });
    
  }

  
  ngOnInit() {
  }

}
