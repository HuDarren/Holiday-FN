import React from 'react';
import { Link } from 'react-router-dom';

function WishListViewB(props) {
  const name = props.name;
  const description = props.description;
  const number = props.number;
  const removeWishList = props.removeWishList;
  const image = props.image;

  function refreshPage() {
    window.location.reload(false);
  }

  function Click() {
    removeWishList(number);
    refreshPage();
  }

  return (
    <div className="wishviewb-container">
      <div className="wishviewb2-container">
        <Link to={`/wishList/${props.number}`} className="wishviewb3-container">
          <img className="wishviewb-image" alt="text" src={image}></img>
          <div className="wishviewb-content">
            <div className="wishviewb-name">{name}</div>
            <div className="wishviewb-description">{description}</div>
          </div>
          <div>
            {props.isLoggedIn ? (
              <div>
                {props.userId === props.number ? (
                  <div className="wishviewb-content2">
                    <button onClick={() => Click()}>REMOVE</button>
                    <button>EDIT</button>
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
