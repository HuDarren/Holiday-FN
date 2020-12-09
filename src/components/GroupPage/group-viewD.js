import React from 'react';
import {Link} from "react-router-dom"

function GroupViewD(props) {
  return (
    <div>
      <Link to={`/wishListView/${props.number}`}>
 
        <div>{props.name}</div>
      </Link>
    </div>
  );
}

export default GroupViewD;
