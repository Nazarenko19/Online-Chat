import React, { useContext } from "react";
import { Router } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "index";
import history from "routes/history";
import Navbar from "components/Header";
import Loader from "components/Loader";
import Content from "modules";

import "../styles/globals.scss";

export default function ChatApp({ ...props }) {
  const { auth } = useContext(Context);
  const [, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <Router history={history}>
        <Navbar />
        <Content {...props} />
      </Router>
    </React.Fragment>
  );
}
