import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import UserWishListA from "./user-wishlistA";

function UserWishList() {
  const [state, setState] = useState({
    items: {
      item1: { id: "item1", name: "ps5", description: "a gaming system" },
      item2: { id: "item2", name: "iphone", description: "a phone" },
      item3: { id: "item3", name: "car", description: "a phone" },
      item4: { id: "item4", name: "computer", description: "a phone" },
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
        listIds: ["item3", "item4"],
      },
    },
    wishListOrder: ["wishList1", "wishList2"],
  });

  const onDragEnd = (result) => {
    document.body.style.color = `inherit`;
    document.body.style.backgroundcolor = `inherit`;

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const wish = state.wishList[source.droppableId];
    const newListIds = Array.from(wish.listIds);
    newListIds.splice(source.index, 1);
    newListIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...wish,
      listIds: newListIds,
    };
    const newState = {
      ...state,
      wishList: {
        ...state.wishList,
        [newColumn.id]: newColumn,
      },
    };
    setState(newState);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.wishListOrder.map((wishListId) => {
          const wList = state.wishList[wishListId];
          const list = wList.listIds.map((listId) => state.items[listId]);
          return (
            <UserWishListA
              key={wList.id}
              state={state}
              wList={wList}
              list={list}
            />
          );
        })}
      </DragDropContext>
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
