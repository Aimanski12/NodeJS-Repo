import firebase from "firebase";
// import * as admin from "firebase-admin";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "apikey",
  authDomain: "authkey",
  projectId: "id key",
  storageBucket: "storage key",
  messagingSenderId: "messaging key",
  appId: "app id key",
});

// export const admi = admin;
export const auth = app.auth();
export const db = firebase.firestore();
export default app;
