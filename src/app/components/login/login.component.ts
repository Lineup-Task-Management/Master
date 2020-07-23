import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';

import {AngularFirestore} from '@angular/fire/firestore';

import {FirebaseService} from '../../service/firebase.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ui: firebaseui.auth.AuthUI;
  userId: string;
  email: string;
  user: string;
  public isLoggedIn = false;



  constructor(public afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private fbService: FirebaseService) {

}

  ngOnInit(): void {


    const uiConfig = {

      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,


      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful
          .bind(this)

      }

    };


    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

        // Show user signed in screen. Reset if user just signed in. (Single page app)
        this.ui.reset();
      } else {

        // No user signed in, render sign-in UI.
        this.ui.start('#firebaseui-auth-container', uiConfig);
      }
    });


  }




  onLoginSuccessful(){

    this.isLoggedIn = true;
    this.userId = firebase.auth().currentUser.uid;

    this.email = firebase.auth().currentUser.email;
    this.user = firebase.auth().currentUser.displayName;
    const date = new Date();
    this.db.collection('Users').doc(this.userId).snapshotChanges().subscribe(res => {
       if (!res.payload.exists)
       {
         this.db.collection('Users').doc(this.userId).set({
           uid: this.userId,
           email: firebase.auth().currentUser.email
         }, {merge: true});

         this.db.doc('Users/' + this.userId + '/projects/project1').set({
           id: date.getTime().toString(),
               title: 'First Project',
               tasks: Array<any>({
                 title: 'Whats your first task?',
                 description: 'click the add the new task button',

                 completed: false,
                 editing: false,
                 priority: 1,
                 countdownTimer: 10,
               })
             }, {merge: true});


       }
       else{
         this.fbService.changeUserId(this.userId);
         console.log('already Exists');

         console.log(this.fbService.userId);
       }

       }
       );



      }






  async signOut(){
    await this.afAuth.auth.signOut();

    this.isLoggedIn = false;

    this.fbService.changeUserId('2CThQyuj97facovRlrzWh2J8gMn1');

  }


}
