/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_PROFILE = 'GET_PROFILE';

const defaultProfile = [];

const getProfile = (data) => ({
  type: GET_PROFILE,
  data,
});

export const fetchProfile = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/users/${userid}`);
      dispatch(getProfile(res.data.groups));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = defaultProfile, action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.data;
    default:
      return state;
  }
}
