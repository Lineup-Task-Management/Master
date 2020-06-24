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
    
    deleteTask(data){
        return this.db.collection('task').doc(data.payload.doc.id).delete();


    }

    completeTask(data){
        return this.db.collection('task').doc(data.payload.doc.id).set({ completed: true}, {merge : true});




    }

    addTask(title,description, completed){
        return this.db.collection('task').add({
          //id : id,
          title: title,
          description:description,
          completed:completed
        });
      }
    }
    