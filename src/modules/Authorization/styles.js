import { createStyles } from "@material-ui/core/styles";

const authorizationStyles = createStyles(() => ({
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
