import React from 'react';
import { Link } from 'react-router-dom';

function FriendViewC(props) {
  return (
    <div className="friendviewb-container1">
      <div className="friendviewb-container2">
        <button className="friendviewb-button1">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.followerId}`}
          >
            <div className="friendviewb-content">{props.followerName[0]}</div>
          </Link>
        </button>
      </div>
      <div className="friendviewb-container3">
        <button className="friendviewb-button2">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.followerId}`}
          >
            <div className="friendviewb-content2">{props.followerName}</div>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FriendViewC;
