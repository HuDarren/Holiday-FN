import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 50px;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
`;

function UserProfile() {
  return (
    <Container>
      <div>Picture</div>
      <div>Name</div>
      <div>Username</div>
    </Container>
  );
}

export default UserProfile;
