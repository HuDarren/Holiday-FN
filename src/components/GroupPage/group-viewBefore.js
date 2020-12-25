import React from 'react';
import { Link } from 'react-router-dom';
import './group-z.css';

function GroupViewB(props) {
  return (
    <div className="groupviewB-container1">
      <div className="groupviewB-container2">
        <Link className="groupviewB-container3" to={`/group/${props.number}`}>
          <img className="groupviewB-image" alt="im" src={props.image}></img>
          <div className="groupviewB-content">{props.name}</div>
        </Link>
      </div>
    </div>
  );
}

export default GroupViewB;
