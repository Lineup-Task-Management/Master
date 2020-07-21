import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  MessagingService } from '../service/messaging.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable()
export class SendMessage{
    url: string = 'https://fcm.googleapis.com/fcm/send';

    constructor (private http: HttpClient, private message: MessagingService ) { }

    
    
    
    
    sendPostRequest() {

        console.log('Did this call?');
         const headers = new HttpHeaders()
             .set('authorization', 'key=AAAAdhtcBzc:APA91bH1JvC_EgOKeN1L8HhsRCJDJ-vnlwLp9wHJua-OwtSaQjewe8SHLMD8liFODuPkZpaMJudt1s88m4_Htymek52nJXETDN9HgBgzrrWRlKWYtsv-mbd4-_A0xOQoYWxGUQBWU4KJ')
             .set('content-Type', 'application/json');

         const body = {
                "notification": {
                    "title": "Lineup Task Manager",
                    "body": "Timer has expired!",
                },
                "to": this.message.tokenId
         }
    
         this.http.post(this.url, body, { headers: headers }).subscribe();
         console.log(this.message.tokenId);
        }   
}

