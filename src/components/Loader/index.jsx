import React from "react";
import { Container, Grid } from "@material-ui/core";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justify="center"
      >
        Loading...
      </Grid>
    </Container>
  );
};

export default Loader;
