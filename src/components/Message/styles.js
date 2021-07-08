import { createStyles } from "@material-ui/core/styles";

const messageStyles = createStyles(() => ({
  messageWrapper: {
    margin: 10,
    width: "fit-content",
    padding: 5,
    marginLeft: "10px",
  },
  messageIsCurrentUser: {
    marginLeft: "auto",
  },
  messageAvatar: {
    marginRight: "5px",
  },
}));

export default messageStyles;
