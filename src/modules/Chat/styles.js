import { createStyles } from "@material-ui/core/styles";
import Background from "assets/backgrounds/e-mail.jpg";

const chatStyles = createStyles(() => ({
  chatContainer: {
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }
}));

export default chatStyles;
