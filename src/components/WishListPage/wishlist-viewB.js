import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/wishList/${props.number}`} className="WishListView-Container">
        <img alt="text" src={image}></img>
        <div>{name}</div>
        <div>{description}</div>
        <button onClick={() => Click()}>REMOVE</button>
        <button>EDIT</button>
      </Link>
    </div>
  );
}

export default WishListViewB;
