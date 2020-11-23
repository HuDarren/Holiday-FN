import React, { useState } from "react";

function UserWishList() {
  const [state, setState] = useState({
    items: {
      item1: { id: "item1", name: "ps5", description: "a gaming system" },
      item2: { id: "item2", name: "iphone", description: "a phone" },
    },
    wishList: {
      wishList1: {
        id: "wishList1",
        title: "Christmas",
        list: ["item1", "item2"],
      },
      wishList2: {
        id: "wishList2",
        title: "Birthday",
        list: ["item1", "item2"],
      },
    },
    wishListOrder: ["wishList1", "wishList2"],
  });

  const table = {};

  function list() {
    const wishListOrder = state.wishListOrder;
    const wishListTitle = state.wishList;
    for (let i = 0; i < wishListOrder.length; i++) {
      table[wishListTitle[wishListOrder[i]].title] = [
        wishListTitle[wishListOrder[i]].list,
      ];
    }
    return table;
  }

  list(state);

  console.log("console", table);

  return <div>hello</div>;
}

export default UserWishList;
