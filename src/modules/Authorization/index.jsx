import React, { useContext } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { Context } from "index";
import firebase from "firebase";
import authorizationStyles from "./styles";
import { withStyles } from "@material-ui/styles";
import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";

const Authorization = ({ classes }) => {
  const { authorizationWrapper, authorizationGoogleIcon, authorizationButton } =
    classes;

  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid
        container
        className={authorizationWrapper}
        alignItems="center"
        justify="center"
      >
        <Button className={authorizationButton} onClick={login}>
          Sign in with Google
          <GoogleIcon className={authorizationGoogleIcon} />
        </Button>
      </Grid>
    </Container>
  );
};

export default withStyles(authorizationStyles)(Authorization);
