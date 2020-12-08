import React from 'react';
import { Link } from 'react-router-dom';

function FriendViewC(props) {
  return (
    <div>
      <Link to={`/wishList/${props.followerId}`}>
        <div>{props.followerName}</div>
      </Link>
    </div>
  );
}

export default FriendViewC;
