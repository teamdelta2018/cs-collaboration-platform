import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(public myAuth: AngularFireAuth) {
	this.user = myAuth.authState;
	}

	 getuser() {
    console.log(firebase.auth().currentUser.email);
  }
  
  google() {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  this.token = result.credential.accessToken;
  //console.log(this.token);
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }
  signup(email: string, password: string) {
    this.myAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        alert('Success! user created');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        alert('Something went wrong: ' + err.message);
      });    
  }

  login(email: string, password: string) {
    this.myAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        alert( email + ' logged in successfully');
        window.location.reload()
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        alert('Something went wrong: ' + err.message);
      });
  }

  logout() {
    this.myAuth
      .auth
      .signOut();
    window.location.reload()  
  }
  
   
  
}
