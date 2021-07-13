import React, { useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import Button from "components/Button";
import Context from "context";
import firebase from "firebase/app";
import authorizationStyles from "./styles";
import { withStyles } from "@material-ui/styles";
import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";

const Authorization = ({ classes }) => {
  const {
    authorizationContainer,
    authorizationWrapper,
    authorizationGoogleIcon,
    authorizationButtonWrapper,
    authorizationButton
  } = classes;

  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <section className={authorizationContainer}>
      <Container>
        <Grid container className={authorizationWrapper} justifyContent="center" alignItems="center">
          <div className={authorizationButtonWrapper}>
            <Button className={authorizationButton} onClick={login}>
              Sign in with Google
              <GoogleIcon className={authorizationGoogleIcon} />
            </Button>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default withStyles(authorizationStyles)(Authorization);
