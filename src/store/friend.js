/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_FOLLOW = 'GET_FOLLOW';

const GET_FOLLOWER = 'GET_FOLLOWER';

const SEARCH = 'SEARCH';

const defaultFriend = { follow: [], follower: [], search: [] };

const getFollow = (data) => ({
  type: GET_FOLLOW,
  data,
});

const getFollower = (data) => ({
  type: GET_FOLLOWER,
  data,
});

const search = (data) => ({
  type: SEARCH,
  data,
});

export const fetchFollow = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/friends/follow/${id}`);
      dispatch(getFollow(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSearch = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/users/search/${id}`);
      dispatch(search(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFollower = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/friends/follower/${id}`);
      dispatch(getFollower(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultFriend, action) {
  switch (action.type) {
    case GET_FOLLOW:
      return { ...state, follow: action.data };
    case GET_FOLLOWER:
      return { ...state, follower: action.data };
    case SEARCH:
      return { ...state, search: action.data };
    default:
      return state;
  }
}
