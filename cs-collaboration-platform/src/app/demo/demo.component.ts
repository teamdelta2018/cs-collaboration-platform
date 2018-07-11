import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  items: Observable<any[]>;
  current: Observable<any[]>;
  constructor(db: AngularFirestore) { 
    this.items = db.collection('users').valueChanges();
    this.current = db.collection('users', ref => ref.where('email', '==', 'franklinpracticum2018@gmail.com')).valueChanges();
  }

  ngOnInit() {
  }

}
