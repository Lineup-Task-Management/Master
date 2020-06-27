import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebaseui from "firebaseui";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ui: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth) {

}

  ngOnInit(): void {

    const uiConfig ={

      signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,


      ],
      callbacks:{
        signInSuccessWithAuthResult:  this.onLoginSuccessful
          .bind(this)

      }

    };

    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
  this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  onLoginSuccessful(){

  }

}
