import { createStyles } from "@material-ui/core/styles";

const headerStyles = createStyles(({ palette }) => ({
  headerLogoContainer: {
    display: "flex",
    alignItems: "center"
  },
  headerIcon: {
    marginRight: "10px",
    fontSize: "35px",
    color: palette.colors.white
  },
  headerTitle: {
    textTransform: "uppercase",
    fontSize: "20px",
    color: palette.colors.white
  },
  headerContainer: {
    padding: "25px 65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: palette.colors.main
  }
}));

export default headerStyles;
