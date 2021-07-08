import React, { useContext, useState } from "react";
import { Context } from "index";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import chatStyles from "./styles";
import { withStyles } from "@material-ui/styles";
import Loader from "components/Loader";
import { Container, Grid, TextField, Button, Avatar } from "@material-ui/core";
import Message from "components/Message";

const Chat = ({ classes }) => {
  const { chatWrapper } = classes;

  const [value, setValue] = useState();
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const handleSendMessage = async () => {
    const { uid, displayName, photoURL } = user;

    firestore.collection("messages").add({
      uid,
      displayName,
      photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justify="center"
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {loading ? (
            <Loader />
          ) : (
            messages?.map((message) => (
              <Message
                message={message}
                isCurrentUser={user.uid === message.uid}
              />
            ))
          )}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant="outlined"
            value={value}
            onChange={handleInputChange}
          />
          <Button onClick={handleSendMessage} variant="outlined">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(chatStyles)(Chat);
