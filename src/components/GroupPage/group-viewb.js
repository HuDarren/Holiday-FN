import React from 'react';
import { Link } from 'react-router-dom';

function GroupViewB(props) {
  return (
    <div>
      <div>
        {props.profileid !== props.userid ? (
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
        ) : null}
      </div>
    </div>
  );
}

export default GroupViewB;
