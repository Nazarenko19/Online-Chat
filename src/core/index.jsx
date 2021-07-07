import React, { useContext } from "react";
import { Router } from "react-router-dom";
import Content from "modules";
import history from "routes/history";
import Navbar from "components/Navbar";
import { Context } from "index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "components/Loader";

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
