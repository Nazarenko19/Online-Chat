import React from "react";
import { withStyles } from "@material-ui/styles";
import messageStyles from "./styles";
import { Grid, Avatar } from "@material-ui/core";
import cx from "classnames";

const Message = ({ classes, message, isCurrentUser = null }) => {
  const { messageWrapper, messageIsCurrentUser, messageAvatar } = classes;
  const { photoURL, displayName, text } = message;

  return (
    <div className={cx(messageWrapper, isCurrentUser && messageIsCurrentUser)}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Avatar className={messageAvatar} src={photoURL} />
        <div>{displayName}</div>
      </Grid>
      <p>{text}</p>
    </div>
  );
};

export default withStyles(messageStyles)(Message);
