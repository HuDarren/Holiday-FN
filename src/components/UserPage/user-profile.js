import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 50px;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
`;

function UserProfile(props) {
  return (
    <Container>
      <div>{props.user.name}</div>
      <div>{props.user.email}</div>
      <div>Username</div>
    </Container>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(UserProfile);
