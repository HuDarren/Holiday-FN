import React from "react";

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
    </div>
  );
}

export default WishItemView;
