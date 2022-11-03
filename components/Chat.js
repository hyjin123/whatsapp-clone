import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
  // get the logged in user
  const [user] = useAuthState(auth);

  // get the avatar
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  console.log(recipient?.photoURL);
  // get the recipient email using utils function
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
