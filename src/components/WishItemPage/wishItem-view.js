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
      <div>{props.number}</div>
      <button onClick={() => Click()}>REMOVE</button>
      <Link to={`/itemForm/${props.number}`}>ADD</Link>
    </div>
  );
}

export default WishItemView;
