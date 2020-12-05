import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./friend-z.css";

function FriendHome(props) {
  return (
    <div className="container">
      <div className="container1">
        <div className="title">Friends</div>
        <div>Add Friends</div>
        <div className="button-container"></div>
      </div>
    </div>
  );
}

export default FriendHome;
