import React from "react";
import { connect } from "react-redux";
import "./user-z.css";

function UserProfile(props) {
  return (
    <div className="user-container">
      <div className="user-name">Welcome, {props.user.name}</div>
      <div
      className="user-image-container"
      >
        <img alt="img" src={props.user.profileImage}
        className="user-image"
        ></img>
      </div>
      {/* <div className="user-name">{props.user.email}</div> */}
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(UserProfile);
