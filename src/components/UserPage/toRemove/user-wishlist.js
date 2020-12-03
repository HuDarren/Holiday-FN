/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import UserWishListA from "./user-wishlistA";
import { fetchItem } from "../../../store/item";
import { connect } from "react-redux";
import axios from "axios";

function UserWishList(props) {
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

  // const data = async () => {
  //   try {
  //     const res = await axios.get("/api/items/2");
  //     // console.log(typeof res.data[0].data);
  //     const newState = res.data[0].data;
  //     console.log("newState", newState);
  //     setState(newState);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // data();

  // console.log("state", state);

  useEffect(() => {
    props.fetchItem(2);
  }, []);

  // console.log("state", props.item, wishList: {}, wishListOrder: "");

  // setState({
  //   items: JSON.parse(props.item.items),
  //   wishList: props.item.wishList,
  //   wishListOrder: props.item.wishListOrder,
  // });

  console.log(state);

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

const mapState = (state) => ({
  item: state.item,
});

const mapDispatch = (dispatch) => ({
  fetchItem: (userId) => dispatch(fetchItem(userId)),
});

export default connect(mapState, mapDispatch)(UserWishList);
