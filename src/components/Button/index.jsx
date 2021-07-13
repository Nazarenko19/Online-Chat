import React from "react";
import cx from "classnames";
import { withStyles } from "@material-ui/styles";
import buttonStyles from "./styles";

const Button = ({ classes, content, children, className = null, ...props }) => {
  const { buttonUnderline } = classes;

  return (
    <button type="button" className={cx(buttonUnderline, className, "uppercase")} {...props}>
      {content || children}
    </button>
  );
};

export default withStyles(buttonStyles)(Button);
