import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function WishListHome(props) {
  return (
    <div>
      <div>{props.user.email}</div>
      <div>Count</div>
      <div>
        <Link to="/wishListForm">Add To WishList</Link>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(WishListHome);

