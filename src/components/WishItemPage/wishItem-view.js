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

  // console.log(props.userId);
  // console.log(props.wishListId);

  return (
    <div className="view-container1">
      <div className="view-container2">
        <div className="view-container3">
          <img className="view-image" alt="text" src={props.image}></img>
          <div className="view-content">
            <div className="view-name">{props.name}</div>
            <div className="view-description">{props.description}</div>
          </div>
          <div>
            {props.isLoggedIn ? (
              <div>
                {props.userId === props.wishListId ? (
                  <div className="view-content2">
                    <button className="view-button" onClick={() => Click()}>
                      <span className="view-content3">REMOVE</span>
                    </button>
                    <button className="view-button">
                      <span className="view-content3"> EDIT</span>
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
