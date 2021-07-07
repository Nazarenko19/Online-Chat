import React from "react";
import { Loader as BasicLoader } from "react-loaders";
import { withStyles } from "@material-ui/styles";
import loaderStyles from "./styles";

const Loader = ({ classes }) => {
  const { loaderWrapper } = classes;

  return (
    <div className={loaderWrapper}>
      <BasicLoader type="ball-clip-rotate-pulse" />
    </div>
  );
};

export default withStyles(loaderStyles)(Loader);
