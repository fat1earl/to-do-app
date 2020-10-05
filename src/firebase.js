import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBv_2Y7c-_c71fJTJ4VYTfCfK1N5WFQoQ0",
  authDomain: "todo-app-d9dbc.firebaseapp.com",
  databaseURL: "https://todo-app-d9dbc.firebaseio.com",
  projectId: "todo-app-d9dbc",
  storageBucket: "todo-app-d9dbc.appspot.com",
  messagingSenderId: "867132279806",
  appId: "1:867132279806:web:2329e8f149d201c140ceaf",
  measurementId: "G-JH9ZQC0624",
});

const db = firebaseApp.firestore();

export default db;
