import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable , Subject, } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showAddPost: boolean = false;
  showSubmitFinalize: boolean = false;
  totalPosts: number = 0;
  loggedInEmail: string;
  postId: string;
  items: Observable<any[]>;
  auth: AuthService;
  responses: Observable<any[]>;
  test: Observable<any[]>;
  database: AngularFirestore;
  showEdit: boolean = false;
  constructor(public authService: AuthService, public db: AngularFirestore) {
    this.auth = authService;
    this.items = db.collection('users').valueChanges();
    this.responses = db.collection('responses').valueChanges();
    this.database = db;
    this.responses = db.collection('responses').valueChanges();
   }

  
  changeShowAddPost() {
    if (this.showAddPost) {
      this.showAddPost = false;
    }
    else{
      this.showAddPost = true;
    }
    this.getUserEmail();
  }

  changeShowSubmitFinalize() {
    if (this.showSubmitFinalize) {
      this.showSubmitFinalize = false;
    }
    else{
      this.showSubmitFinalize = true;
    }
  }

  clear() {
  }
  

  getPostId() {
    this.showEdit = false;
    var currentcount = 0;
    var emailhold = "";
    this.items.subscribe(data=> {
      //console.log("users", data);
      for (var i = 0; i < (data.length); i++) {
        var user = data[i];
        //console.log(i, user.email); 
        if (user.email == this.loggedInEmail) {
          console.log("They Match", user.postcount);
          var intholder = Number(user.postcount);
          intholder = intholder + 1;
          console.log("int holder is ", intholder);
          this.postId = this.loggedInEmail.split("@")[0] + "P" + intholder;
          console.log("next post id is: ", this.postId);
          this.totalPosts = intholder;
          console.log(" next post is number: ", this.totalPosts);
          
        }
      }
      
    });
  }
  addPost(title: string, content: string) {
    
    this.getUserEmail();
    var mydate = new Date();
    var idHolder: string  = "Placeholder ID";
    console.log(mydate);
    console.log("Add post works", title, content);
    
    if (this.postId != undefined) {
      idHolder = this.postId;
    }
    console.log("Next Post Id Is: ", this.postId); 
    console.log("content is - ", content);
    var washingtonRef = this.database.collection("posts").doc(idHolder);

    // Set the "capital" field of the city 'DC'
    washingtonRef.set({
        title: title,
        content: content,
        edited: mydate,
        id: this.postId

    })
    .then(function() {
        console.log("Document successfully updated!");
        alert("Post Added Successfully: " + idHolder);
        
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    var userRef = this.database.collection("users").doc(this.loggedInEmail);

    // Set the "capital" field of the city 'DC'
    userRef.update({
        postcount: this.totalPosts

    })
    .then(function() {
        console.log("Document successfully updated!");
        
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }
  getUserEmail() {
    this.auth.user.subscribe(mydata=>{
         console.log("Email is : ", mydata.email);
         this.loggedInEmail = mydata.email;

      });
  } 
  ngOnInit() {
  }

}
