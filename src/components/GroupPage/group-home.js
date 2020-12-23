import React from 'react';
import { Link } from 'react-router-dom';
import './group-z.css';

function GroupHome() {
  return (
    <div className="container">
      <div className="container1">
        <div className="title">Groups</div>
   
        <div className="button-container">
          <div className="button">
            <Link className="button2" to="/groups">
              Add Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupHome;
