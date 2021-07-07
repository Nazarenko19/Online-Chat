import React, { Suspense, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { publicRoutes, privateRoutes } from "routes/routes-list";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "index";
import Loader from "components/Loader";

const Authorization = React.lazy(() => import("./Authorization"));
const Chat = React.lazy(() => import("./Chat"));

const Content = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {user ? (
          <Switch>
            <Route path={privateRoutes.chat} component={Chat} />
            <Redirect to={privateRoutes.chat} />
          </Switch>
        ) : (
          <Switch>
            <Route
              path={publicRoutes.authorization}
              component={Authorization}
            />
            <Redirect to={publicRoutes.authorization} />
          </Switch>
        )}
      </Suspense>
    </>
  );
};
export default Content;
