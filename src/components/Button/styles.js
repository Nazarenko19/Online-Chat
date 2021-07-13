import { createStyles } from "@material-ui/core/styles";

const buttonStyles = createStyles(({ palette }) => ({
  buttonUnderline: {
    color: palette.colors.white,
    position: "relative",
    fontSize: "14px",
    background: "transparent",
    border: 0,
    outline: 0,
    cursor: "pointer",
    ["&:hover"]: {
      ["&::after"]: {
        width: "10%"
      }
    },
    ["&::after"]: {
      content: "' '",
      position: "absolute",
      left: 0,
      bottom: "-4px",
      width: "100%",
      height: "2px",
      background: palette.colors.white,
      transition: "all 1s ease"
    }
  }
}));

export default buttonStyles;
