import React from 'react';
import { Link } from 'react-router-dom';

function GroupViewD(props) {
  return (
    <div className="friendviewb-container1">
      <div className="friendviewb-container2">
        <button className="groupviewC-button1">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.number}`}
          >
            <div className="friendviewb-content">{props.name[0]}</div>
          </Link>
        </button>
      </div>
      <div className="friendviewb-container3">
        <button className="friendviewb-button2">
          <Link
            className="friendviewb-link"
            to={`/wishListView/${props.number}`}
          >
            <div className="friendviewb-content2">{props.name}</div>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default GroupViewD;
