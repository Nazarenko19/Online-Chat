import React from "react";

import { Router } from "react-router-dom";
import history from "routes/history";

import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/config";
import "firebase/firestore";
import "firebase/auth";

import Context from "context";

import Navbar from "components/Header";
import Loader from "components/Loader";
import Content from "modules";

import "../styles/globals.scss";

export default function ChatApp({ ...props }) {
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <Router history={history}>
        <Context.Provider value={{ firebase, auth, firestore }}>
          <Navbar />
          <Content {...props} />
        </Context.Provider>
      </Router>
    </React.Fragment>
  );
}
