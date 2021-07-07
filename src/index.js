import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "core/index";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBnV4hqhm0gDrqBbATZQamnHjEaEJJin6o",
  authDomain: "chat-react-5469f.firebaseapp.com",
  projectId: "chat-react-5469f",
  storageBucket: "chat-react-5469f.appspot.com",
  messagingSenderId: "962699765272",
  appId: "1:962699765272:web:923dd6c452cbc14fce856d",
  measurementId: "G-Q763LX3N33",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
