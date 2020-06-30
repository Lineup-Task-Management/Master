import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebaseui from "firebaseui";

import {AngularFirestore} from "@angular/fire/firestore";
import {merge} from "rxjs";
import {FirebaseService} from "../../service/firebase.service";
import {take, tap} from "rxjs/operators";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ui: firebaseui.auth.AuthUI;
  userId:string;
  public isLoggedIn: boolean = false;



  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private fbService: FirebaseService) {
 this.afAuth.authState.subscribe(user =>{
   if(user) this.userId = user.uid
 })
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

    this.isLoggedIn = true;
    this.userId = firebase.auth().currentUser.uid;
      alert("Logged in successfuly to ");
     this.db.collection('Users').doc(this.userId).snapshotChanges().subscribe(res =>{
       if (!res.payload.exists)
       {
         this.db.collection('Users').doc(this.userId).set({
           projects: Array<any>(
             {
               title:"first project",
               task: Array<any>({
                 title: "Whats your first task?",
                 description: "click the add new task button",
                 completed: false
               },)
             })
         },{merge: true});
         this.fbService.changeUserId(this.userId);
       }
       else{
         console.log("already Exists");
       }
       }
       )



        //this.fbService.getProjects();

      }











  async signOut(){
    await this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    window.location.reload();

  }


}
