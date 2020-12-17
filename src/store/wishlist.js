/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_WISHLIST = 'GET_WISHLIST';
const REMOVE_SINGLE_WISHLIST = 'REMOVE_SINGLE_WISHLIST';
const UPDATE_WISHLIST = 'UPDATE_WISHLIST';
const ADD_WISHLIST = 'ADD_WISHLIST';

const defaultState = [];

const getWishList = (wishList) => ({
  type: GET_WISHLIST,
  wishList,
});

const removeSingleWishList = (wishListId) => ({
  type: REMOVE_SINGLE_WISHLIST,
  wishListId,
});

const updateWishList = (wishList) => ({
  type: UPDATE_WISHLIST,
  wishList,
});

const addWishList = (wishList) => ({
  type: ADD_WISHLIST,
  wishList,
});

export const fetchWishList = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/wishlists/${userid}`);
      dispatch(getWishList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addWishListThunk = (userid, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`api/wishlists/${userid}`, info);
      dispatch(addWishList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateWishListThunk = (userid, wishid, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/wishlists/${userid}/${wishid}`, info);
      dispatch(updateWishList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeSingleWishListThunk = (wishListId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/wishlists/${wishListId}`);
      dispatch(removeSingleWishList(wishListId));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_WISHLIST:
      return action.wishList;

    case UPDATE_WISHLIST:
      const updated = state.wishList.map((list) => {
        if (list.id !== action.id) {
          return action.item;
        } else {
          return list;
        }
      });
      return { ...state, wishlist: updated };





      
    case REMOVE_SINGLE_WISHLIST:
      const removed = state.filter((list) => {
        return list.id !== action.id;
      });

      return { ...state, wishList: removed };
    default:
      return state;
  }
}
