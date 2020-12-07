/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_GROUP = 'GET_GROUP';

const defaultGroup = [];

const getGroup = (data) => ({
  type: GET_GROUP,
  data,
});

export const fetchGroup = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get();
      dispatch(getGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultGroup, action) {
  switch (action.type) {
    case GET_GROUP:
      return action.data;
    default:
      return state;
  }
}
