import React, { useState, useEffect } from "react";
import UserWishListA from "./user-wishlistA";

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
        listIds: ["item1", "item2"],
      },
      wishList2: {
        id: "wishList2",
        title: "Birthday",
        listIds: ["item1", "item2"],
      },
    },
    wishListOrder: ["wishList1", "wishList2"],
  });

  return (
    <div>
      {state.wishListOrder.map((wishListId) => {
        const wList = state.wishList[wishListId];
        const list = wList.listIds.map(function (listId) {
          return state.items[listId];
        });
        return (
          <UserWishListA
            key={wishListId}
            state={state}
            wList={wList}
            list={list}
          />
        );
      })}
    </div>
  );
}

export default UserWishList;

//   const table = {};

//   function list() {
//     const wishListOrder = state.wishListOrder;
//     const wishListTitle = state.wishList;
//     for (let i = 0; i < wishListOrder.length; i++) {
//       let title = wishListTitle[wishListOrder[i]].title;
//       table[title] = [];
//       let items = wishListTitle[wishListOrder[i]].list;
//       for (let j = 0; j < items.length; j++) {
//         table[title].push(state.items[items[j]].name);
//       }
//     }
//     return table;
//   }

//     list(state);

//   console.log("console", table);
