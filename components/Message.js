import styled from "styled-components";

const Message = ({ user, message }) => {
  console.log("this is user", user);
  console.log("this is message", message);

  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
};

export default Message;

const Container = styled.div``;
