import React from 'react';
import { Link } from 'react-router-dom';

function WishItemView(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  function Click() {
    props.deleteItem(props.number);
    refreshPage();
  }



  return (
    <div className="view-container1">
      <div className="view-container2">
        <div className="view-container3">
          <img className="view-image" alt="text" src={props.image}></img>
        </div>
        <div className="view-container4">
          <div className="view-content">
            <div className="view-name">{props.name}</div>
            {/* <div className="view-description">{props.description}</div> */}
          </div>
          <div className="view-content2">
            {props.isLoggedIn ? (
              <div>
                {props.userId ? (
                  <div className="view-content4">
                    <button className="view-button" onClick={() => Click()}>
                      <span className="view-content3">REMOVE</span>
                    </button>
                    <button className="view-button">
                      <span className="view-content3">
                        <Link
                        
                          className="view-content3"
                          to={`/itemFormB/${props.wishId}/${props.number}`}
                        >
                          EDIT
                        </Link>
                      </span>
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishItemView;
