import React, { useContext } from "react";
import { Context } from "index";
import { useAuthState } from "react-firebase-hooks/auth";
import { withStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Grid, Toolbar, AppBar, Button } from "@material-ui/core";
import headerStyles from "./styles";

const Header = ({ classes }) => {
  const { headerWrapper, toolbar } = classes;
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className={headerWrapper}>
      <AppBar position="static">
        <Toolbar className={toolbar}>
          <Grid container justify="space-between" alignItems="center">
            <QuestionAnswerIcon />
            {user && (
              <Button onClick={() => auth.signOut()} color="inherit">
                Logout
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(headerStyles)(Header);
