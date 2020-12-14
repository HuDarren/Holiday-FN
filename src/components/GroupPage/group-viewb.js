import React from 'react';
import { Link } from 'react-router-dom';

function GroupViewB(props) {
  return (
    <div>
      <div>
        <div>
          {
            <div>
              <Link to={`/group/${props.number}`}>
                {/* <img alt="im" src={props.image}></img> */}
                <div>{props.name}</div>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default GroupViewB;
