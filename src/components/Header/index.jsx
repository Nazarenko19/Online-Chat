import React, { useContext } from "react";
import Context from "context";

import { withStyles } from "@material-ui/core/styles";
import headerStyles from "./styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Container } from "@material-ui/core";
import Button from "components/Button";
import cx from "classnames";

const Header = ({ classes }) => {
  const { headerLogoContainer, headerTitle, headerIcon, headerContainer, linkUnderline } = classes;
  const { auth } = useContext(Context);

  return (
    <header>
      <Container disableGutters maxWidth={false} className={cx(headerContainer)}>
        <div className={headerLogoContainer}>
          <QuestionAnswerIcon className={headerIcon} />
          <span className={headerTitle}>Online-Chat</span>
        </div>
        {auth.currentUser && <Button content="Logout" onClick={() => auth.signOut()} />}
      </Container>
    </header>
  );
};

export default withStyles(headerStyles)(Header);
