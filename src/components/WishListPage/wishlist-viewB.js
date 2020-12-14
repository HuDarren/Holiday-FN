import React from 'react';
import { Link } from 'react-router-dom';

function WishListViewB(props) {
  const name = props.name;
  const description = props.description;
  const itemUserId = props.itemUserId;
  const removeWishList = props.removeWishList;
  const image = props.image;
  const listId = props.id;

  function refreshPage() {
    window.location.reload(false);
  }

  function Click() {
    removeWishList(props.id);
    refreshPage();
  }

  return (
    <div className="wishviewb-container">
      <div className="wishviewb2-container">
        <Link to={`/wishList/${listId}`} className="wishviewb3-container">
          <img className="wishviewb-image" alt="text" src={image}></img>
          <div className="wishviewb-content">
            <div className="wishviewb-name">{name}</div>
            <div className="wishviewb-description">{description}</div>
          </div>
          <div>
            {props.isLoggedIn ? (
              <div>
                {props.userId === itemUserId ? (
                  <div className="wishviewb-content2">
                    <button
                      className="wishviewb-button"
                      onClick={() => Click()}
                    >
                      <span className="wishviewb-content3">REMOVE</span>
                    </button>
                    <button className="wishviewb-button">
                      <span className="wishviewb-content3">
                        <Link
                          className="wishviewb-content3"
                          to={`/wishListFormB/${props.id}`}
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
        </Link>
      </div>
    </div>
  );
}

export default WishListViewB;
