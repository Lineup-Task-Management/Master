import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebaseui from "firebaseui";

import {AngularFirestore} from "@angular/fire/firestore";
import {BehaviorSubject, merge} from "rxjs";
import {FirebaseService} from "../../service/firebase.service";
import {take, tap} from "rxjs/operators";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userChange:boolean = false;
  // private userChangeSource = new BehaviorSubject<boolean>(this.userChange);
  // currentUserChange = this.userChangeSource.asObservable();

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
           uid: this.userId
         },{merge: true})

         this.db.doc('Users/'+this.userId+'/projects/project1').set({
              id:"1",
               title:"First Project",
               tasks:Array<any>({
                 title:"Whats your first task?",
                 description:"click the add the new task button",
                 completed: false,
                 editing: false,
               })
             },{merge: true});


       }
       else{
         this.fbService.changeUserId(this.userId);
         console.log("already Exists");

         console.log(this.fbService.userId);
       }

       }
       )



        //this.fbService.getProjects();

      }











  async signOut(){
    await this.afAuth.auth.signOut();

    this.isLoggedIn = false;
    window.location.reload();
    this.fbService.changeUserId("2CThQyuj97facovRlrzWh2J8gMn1");

  }


}
