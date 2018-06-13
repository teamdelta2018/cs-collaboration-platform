import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(public myAuth: AngularFireAuth) {
	this.user = myAuth.authState;
  }
  
googleSignIn() {
  firebase.auth().signInWithPopup(this.provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  this.token = result.credential.accessToken;
  console.log(this.token);
  // The signed-in user info.
  var user = result.user;
  // can do more stuff later here
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // can do more stuff later here
  });
}

logout() {
    this.myAuth
      .auth
      .signOut();
  }
}
