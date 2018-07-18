import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss']
})
export class MypostsComponent implements OnInit {

  items: Observable<any[]>;
  responses: Observable<any[]>;
  test: Observable<any[]>;
  database: AngularFirestore;
  showEdit: boolean = false;
  constructor(public authService: AuthService, public db: AngularFirestore) {
    this.items = db.collection('posts').valueChanges();
    this.responses = db.collection('responses').valueChanges();
    this.database = db;
    this.responses = db.collection('responses').valueChanges();
   }
 
  contains (id: string, user: string ) {
    // console.log("id passed to contains is ", id);
    // console.log("user passed to contains is ", user);
    // //this.authService.user.subscribe(data => console.log(data));
    // console.log(id, " includes ", user, " : ", id.includes(user))
    if (id != null && user != null) {
     return id.includes(user.split("@")[0]);
    }
    else {
      return null;
    } 
  }

  deletePost() {
    console.log("delete post method works");
  }

  showMyEdit() {
    this.showEdit = true;
  }
  

  updatePost(id: string, update: string) {
    this.showEdit = false;
    console.log("update post method works");
    console.log("post to be updated: ", id);
    var mydate = new Date();
    console.log(mydate);
    console.log("update is - ", update);
    var washingtonRef = this.database.collection("posts").doc(id);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        content: update,
        edited: mydate
    })
    .then(function() {
        console.log(id, "Document successfully updated!");
        
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

  ngOnInit() {
  }

}
