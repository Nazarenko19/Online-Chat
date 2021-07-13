import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  fonts: {
    main: ["apex-regular", "Arial", "sans-serif"].join(","),
    bold: ["apex-bold", "Arial", "sans-serif"].join(","),
    boodleRegular: ["boodle-regular", "Arial", "sans-serif"].join(","),
    boodleBold: ["boodle-bold", "Arial", "sans-serif"].join(","),
    boodleDemiBold: ["boodle-demibold", "Arial", "sans-serif"].join(","),
    boodleLight: ["boodle-light", "Arial", "sans-serif"].join(","),
    boodleMedium: ["boodle-medium", "Arial", "sans-serif"].join(",")
  },
  breakpoints: {
    values: {
      phone: 430,
      xs: 520,
      sm: 600,
      mob: 800,
      md: 960,
      tb: 990,
      lg: 1280,
      xl: 1920
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        width: "100%",
        paddingLeft: "50px !important",
        paddingRight: "50px !important",
        [`@media screen and (max-width: 1280px)`]: {
          paddingLeft: "15px !important",
          paddingRight: "15px !important"
        }
      }
    }
  },
  palette: {
    colors: {
      main: "#000",
      white: "#fff"
    },
    gradient: {
      mainGradient: "linear-gradient(#657eb3 0%, #655faa 100%)"
    },
    error: {
      main: "#555"
    }
  },
  typography: {
    fontFamily: ["apex-regular", "Arial", "sans-serif"].join(","),
    button: {
      fontFamily: "inherit",
      textTransform: "initial"
    }
  }
});

export default theme;
