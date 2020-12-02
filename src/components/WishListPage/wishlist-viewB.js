import React from "react";

function WishListViewB(props) {
  const name = props.name;
  const description = props.description;
  const number = props.number;
  const removeWishList = props.removeWishList;

  function refreshPage() {
    window.location.reload(false);
  }

  function Click() {
    removeWishList(number);
    refreshPage();
  }

  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <button onClick={() => Click()}>REMOVE</button>
      <button>EDIT</button>
    </div>
  );
}

export default WishListViewB;
