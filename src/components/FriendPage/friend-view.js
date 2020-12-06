import React from "react";
import { connect } from "react-redux";

function FriendView() {
  return (
    <div>
      <div>Your Friends</div>
      <div>Following</div>
      <div>Followers</div>
      <div>Search for your friends</div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(FriendView);
