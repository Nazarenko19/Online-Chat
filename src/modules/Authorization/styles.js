import { createStyles } from "@material-ui/core/styles";
import Background from "assets/backgrounds/e-mail.jpg";

const authorizationStyles = createStyles(({ palette, breakpoints }) => ({
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
    fill: "green",
    [breakpoints.down(breakpoints.values.mob)]: {
      width: "20px"
    },
    [breakpoints.down(breakpoints.values.phone)]: {
      marginLeft: "5px",
      width: "18px"
    }
  },
  authorizationButtonWrapper: {
    background: palette.colors.main,
    padding: "60px 85px",
    borderRadius: "25px",
    boxShadow: "0px 0px 26px 11px rgba(34, 60, 80, 0.5)",
    [breakpoints.down(breakpoints.values.mob)]: {
      padding: "40px 65px"
    },
    [breakpoints.down(breakpoints.values.phone)]: {
      padding: "20px 35px"
    }
  },
  authorizationButton: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    [breakpoints.down(breakpoints.values.mob)]: {
      fontSize: "18px"
    },
    [breakpoints.down(breakpoints.values.phone)]: {
      fontSize: "16px"
    }
  }
}));

export default authorizationStyles;
