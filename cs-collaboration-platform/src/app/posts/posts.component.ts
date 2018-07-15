import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  items: Observable<any[]>;
  responses: Observable<any[]>;
  test: Observable<any[]>;
  database: AngularFirestore;
  constructor(public authService: AuthService, public db: AngularFirestore) {
    this.items = db.collection('posts').valueChanges();
    this.responses = db.collection('responses').valueChanges();
    this.database = db;
    this.responses = db.collection('responses').valueChanges();
    this.test = db.collection('posts').valueChanges();
    this.test.subscribe(data=> {
      console.log("posts", data);
    });
   }
 
  contains (id: string, user: string ) {
    console.log("id passed to contains is ", id);
    console.log("user passed to contains is ", user);
    //this.authService.user.subscribe(data => console.log(data));
    console.log(id, " includes ", user, " : ", id.includes(user))
    return id.includes(user.split("@")[0]);
  }
   
  ngOnInit() {
  }

}
