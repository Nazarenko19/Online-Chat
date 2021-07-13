import { createStyles } from "@material-ui/core/styles";

const headerStyles = createStyles(() => ({
  toolbar: {
    background: "black"
  },
  headerLogoContainer: {
    display: "flex",
    alignItems: "center"
  },
  headerIcon: {
    marginRight: "10px"
  },
  headerTitle: {
    textTransform: "uppercase"
  }
}));

export default headerStyles;
