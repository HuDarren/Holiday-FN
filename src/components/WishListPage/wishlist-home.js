import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./wishlist-z.css";

function WishListHome(props) {
  return (
    <div className="container">
      <div className="container1">
        <div className="title">WishList</div>
        <div>{props.user.email}</div>
        <div>Count</div>
        <div className="button-container">
          <div className="button">
            <Link to="/wishListView">Add To WishList</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(WishListHome);
