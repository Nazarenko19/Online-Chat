import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, AppBar, Button } from "@material-ui/core";
import { publicRoutes } from "routes/routes-list";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify="flex-end">
            {!user ? (
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            ) : (
              <NavLink to={publicRoutes.authorization}>
                <Button
                  onClick={() => auth.signOut()}
                  variant="outlined"
                  color="secondary"
                >
                  Logout
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
