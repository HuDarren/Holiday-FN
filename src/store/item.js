/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_ITEM = 'GET_ITEM';
const REMOVE_SINGLE_ITEM = 'REMOVE_SINGLE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

const defaultItem = [];

const getItem = (data) => ({
  type: GET_ITEM,
  data,
});

const removeSingleItem = (itemId) => ({
  type: REMOVE_SINGLE_ITEM,
  itemId,
});

const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item,
});

export const fetchItem = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/items/${userid}`);
      dispatch(getItem(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateItemThunk = (wishid, itemid, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/items/${wishid}/${itemid}`, info);
      dispatch(updateItem(res.item));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeSingleItemThunk = (itemId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/items/${itemId}`);
      dispatch(removeSingleItem(itemId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItemThunk = (wishListId, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/api/items/${wishListId}`, info);
      dispatch(addItem(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultItem, action) {
  switch (action.type) {
    case GET_ITEM:
      return action.data;
    case UPDATE_ITEM:
      return action.item;
    case REMOVE_SINGLE_ITEM:
      const removed = state.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, item: removed };
    default:
      return state;
  }
}
