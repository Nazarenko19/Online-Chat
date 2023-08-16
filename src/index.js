import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "core/index";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//TODO: add from env file
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
