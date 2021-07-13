import { createStyles } from "@material-ui/core/styles";
import Background from "assets/backgrounds/e-mail.jpg";

const authorizationStyles = createStyles(({ palette }) => ({
  authorizationContainer: {
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  },
  authorizationWrapper: {
    height: window.innerHeight - 50
  },
  authorizationGoogleIcon: {
    marginLeft: "10px",
    fill: "green"
  },
  authorizationButtonWrapper: {
    background: palette.colors.main,
    padding: "60px 85px",
    borderRadius: "25px",
    boxShadow: "0px 0px 26px 11px rgba(34, 60, 80, 0.5)"
  },
  authorizationButton: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px"
  }
}));

export default authorizationStyles;
