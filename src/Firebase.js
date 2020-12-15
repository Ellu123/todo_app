import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMzFy9s6OxUOJ-ikef8Kx-ofyPf13jRvg",
    authDomain: "todo-app-cp-8cccd.firebaseapp.com",
    databaseURL: "https://todo-app-cp-8cccd.firebaseio.com",
    projectId: "todo-app-cp-8cccd",
    storageBucket: "todo-app-cp-8cccd.appspot.com",
    messagingSenderId: "54172869151",
    appId: "1:54172869151:web:f3d93870ef8958fa0feb2a",
    measurementId: "G-LSD02W0MZG"

});
const db = firebaseApp.firestore();

export default db;