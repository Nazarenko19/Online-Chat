import { createStyles } from "@material-ui/core/styles";

const globalStyle = createStyles(({ palette }) => ({
  customContainer: {
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto"
  },
  btnBack: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: 0,
    ["& svg"]: {
      width: "15px",
      height: "15px"
    }
  }
}));

export default globalStyle;
