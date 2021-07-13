import { createStyles } from "@material-ui/core/styles";

const loaderStyles = createStyles(() => ({
  loaderSection: {
    position: "relative",
    height: "100vh"
  },
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    borderRadius: "50%",
    backgroundColor: "black",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%"
  }
}));

export default loaderStyles;
