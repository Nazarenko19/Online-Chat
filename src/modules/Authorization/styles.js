import { createStyles } from "@material-ui/core/styles";
import Background from 'assets/backgrounds/e-mail.jpg'

const authorizationStyles = createStyles(() => ({
  authorizationContainer: {
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  },
  authorizationWrapper: {
    height: window.innerHeight - 50,
  },
  authorizationGoogleIcon: {
    marginLeft: "10px",
    fill: "green",
  },
  authorizationButton: {
    background: "black",
    color: "white",
    padding: "35px",
    borderRadius: "15px",
    fontSize: "20px",
    "&:hover": {
      background: "black",
      opacity: 0.8,
      transition: ".3s",
    },
  },
}));

export default authorizationStyles;
