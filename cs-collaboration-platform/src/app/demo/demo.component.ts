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

  checkForUser(user: string) {
	  console.log("check user got: ", user);
    this.current = this.database.collection('users').valueChanges();
    this.current.subscribe(data=>{
      console.log(data)
      data.forEach(function (value) {
        console.log(value.username);
        if (value.username == user) {
          console.log("user found")
          return true;
        }
      });
      
    });
    
  }

  
  ngOnInit() {
  }

}
