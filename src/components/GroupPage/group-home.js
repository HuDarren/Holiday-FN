import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./group-z.css";

function GroupHome(props) {
  return (
    <div className="container">
      <div className="container1">
        <div className="title">Groups</div>
        <div>Add Groups</div>
        <div className="button-container"></div>
      </div>
    </div>
  );
}

export default GroupHome;
