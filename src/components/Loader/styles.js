import { createStyles } from "@material-ui/core/styles";

const loaderStyles = createStyles(() => ({
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "black",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
}));

export default loaderStyles;
