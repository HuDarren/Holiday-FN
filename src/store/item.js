/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const GET_ITEM = "GET_ITEM";

const defaultItem = {};

const getItem = (data) => ({
  type: GET_ITEM,
  data,
});

export const fetchItem = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/items/${userid}`);
      dispatch(getItem(res.data[0].data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultItem, action) {
  switch (action.type) {
    case GET_ITEM:
      return action.data;
    default:
      return state;
  }
}



