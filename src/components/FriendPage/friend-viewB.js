import React from 'react';
import { Link } from 'react-router-dom';

function FriendViewB(props) {
  return (
    <div className="friendviewb-container1">
      <div className="friendviewb-container2">
        <button className="friendviewb-button1">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.followId}`}
          >
            <div className="friendviewb-content">{props.followName[0]}</div>
          </Link>
        </button>
      </div>
      <div className="friendviewb-container3">
        <button className="friendviewb-button2">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.followId}`}
          >
            <div className="friendviewb-content2">{props.followName}</div>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FriendViewB;
