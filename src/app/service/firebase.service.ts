import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
  export class FirebaseService {

    constructor(public db: AngularFirestore) {}

    getTasks(){
        
        return this.db.collection('task').snapshotChanges();
      }
    
    
    addTask(id,title,description){
        return this.db.collection('task').add({
          id : id,
          title: title,
          description:description
        });
      }
    }
    