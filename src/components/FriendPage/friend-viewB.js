import React from 'react';
import { Link } from 'react-router-dom';

function FriendViewB(props) {
  return (
    <div>
      <Link to={`/wishListView/${props.followId}`}>
        <div>{props.followName}</div>
      </Link>
    </div>
  );
}

export default FriendViewB;
