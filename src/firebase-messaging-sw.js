importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyChR7EfqyyyVgc3sL9P3bvycYsuomjzbrQ",
  authDomain: "lineuptaskmanager.firebaseapp.com",
  databaseURL: "https://lineuptaskmanager.firebaseio.com",
  projectId: "lineuptaskmanager",
  storageBucket: "lineuptaskmanager.appspot.com",
  messagingSenderId: "507265156919",
  appId: "1:507265156919:web:84aa69736449de75d0fcb2",
  measurementId: "G-MH82GSBW5S"
  });	
const messaging = firebase.messaging();