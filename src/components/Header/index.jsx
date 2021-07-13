import React, { useContext } from "react";
import Context from "context";
import { withStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Grid, Toolbar, AppBar, Button } from "@material-ui/core";
import headerStyles from "./styles";

const Header = ({ classes }) => {
  const { headerLogoContainer, headerTitle, headerIcon, toolbar } = classes;
  const { auth } = useContext(Context);

  return (
    <AppBar position="fixed">
      <Toolbar className={toolbar}>
        <Grid container justify="space-between" alignItems="center">
          <div className={headerLogoContainer}>
            <QuestionAnswerIcon className={headerIcon} />
            <span className={headerTitle}>Online-Chat</span>
          </div>
          {auth.currentUser && (
            <Button onClick={() => auth.signOut()} color="inherit">
              Logout
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(headerStyles)(Header);
