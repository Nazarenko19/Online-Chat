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
    },
    MuiAutocomplete: {
      paper: {
        background: "#262e4c"
      }
    },
    MuiPopover: {
      paper: {
        background: "#262e4c"
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        color: "#fff",
        "&$checked": {
          color: "#fa9f42"
        }
      }
    },
    MuiTab: {
      root: {
        fontFamily: "apex-bold, Arial, sans-serif"
      }
    },
    MuiDialog: {
      paper: {
        margin: "0 15px"
      }
    }
  },
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#0b0014"
    },
    colors: {
      main: "#000",
      white: "#fff",
      brown: "#A78322",
      silver: "#DCDCDD",
      blueToWhite: "#7FD2F0",
      orange: "#fa9f42",
      primary: "#657eb3",
      red: "#FA4242",
      second: "#262e4c",
      blueToLight: "#94d1ed",
      light: "#918c95"
    },
    gradient: {
      gold: "linear-gradient(#c38f32 0%, #996c17 100%)",
      platinum: "linear-gradient(#fff 0%, #dcd9db 100%)",
      diamond: "linear-gradient(#3d9ad6 0%, #7acef0 100%)",
      mainGradient: "linear-gradient(#657eb3 0%, #655faa 100%)",
      shadow: "linear-gradient(#514f6a 0%, #0f111c 100%)",
      black: "linear-gradient(#0b061e 0%, #0b0b2e 100%)",
      sectionCards: "linear-gradient(29deg, #0b061e 29%, #0b061e 29%, #0b0b2e 75%)",
      main: "#fff"
    },
    error: {
      main: "#555"
    },
    background: {
      default: "#0b0014"
    },
    text: {
      primary: "#fff"
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
