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
  database: AngularFirestore;
  constructor(public authService: AuthService, public db: AngularFirestore) {
    this.items = db.collection('posts').valueChanges();
    this.responses = db.collection('responses').valueChanges();
	  this.database = db;
   }

  ngOnInit() {
  }

}
