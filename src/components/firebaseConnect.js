import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAYBlmF3kXKIGNuFYtmqAAqVk34nH_1qoo",
    authDomain: "cvien-4f7cd.firebaseapp.com",
    databaseURL: "https://cvien-4f7cd-default-rtdb.firebaseio.com",
    projectId: "cvien-4f7cd",
    storageBucket: "cvien-4f7cd.appspot.com",
    messagingSenderId: "681125592423",
    appId: "1:681125592423:web:e978564ab3399f70ee83c2",
    measurementId: "G-MKE1SW55G5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseConnect =  firebase.database().ref('Xe');