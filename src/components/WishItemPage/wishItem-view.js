import React from "react";
import { Link } from "react-router-dom";

function WishItemView(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  function Click() {
    props.deleteItem(props.number);
    refreshPage();
  }

  return (
    <div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <button onClick={() => Click()}>REMOVE</button>
      <button>Edit</button>
    </div>
  );
}

export default WishItemView;
