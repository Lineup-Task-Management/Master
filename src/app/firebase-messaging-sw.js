importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBYySh1ML9lO_MwvhTLo0mquwxN7nk9IAQ",
    authDomain: "pushnotificationtest-4cb85.firebaseapp.com",
    databaseURL: "https://pushnotificationtest-4cb85.firebaseio.com",
    projectId: "pushnotificationtest-4cb85",
    storageBucket: "pushnotificationtest-4cb85.appspot.com",
    messagingSenderId: "672823914265",
    appId: "1:672823914265:web:3efe98f931debf0bf79f88",
    measurementId: "G-KY995YSCX6"
  });	
const messaging = firebase.messaging();