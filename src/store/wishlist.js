/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const GET_WISHLIST = "GET_WISHLIST";

const defaultState = {};

const getWishList = (wishList) => ({
  type: GET_WISHLIST,
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

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_WISHLIST:
      return action.wishList;
    default:
      return state;
  }
}
