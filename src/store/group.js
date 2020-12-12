/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const GET_GROUP = 'GET_GROUP';
const ADD_GROUP = 'ADD_GROUP';
const REMOVE_GROUP = 'REMOVE_GROUP';
const UPDATE_GROUP = 'UDDATE_GROUP';

const defaultGroup = [];

const getGroup = (data) => ({
  type: GET_GROUP,
  data,
});

const addGroup = (data) => ({
  type: ADD_GROUP,
  data,
});

const removeGroup = (data) => ({
  type: REMOVE_GROUP,
  data,
});

const updateGroup = (data) => ({
  type: UPDATE_GROUP,
  data,
});

export const fetchGroup = (userid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/groups/${userid}`);
      dispatch(getGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addGroupThunk = (userid, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/api/groups/${userid}`, info);
      dispatch(addGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeGroupThunk = (groupid) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/api/groups/${groupid}`);
      dispatch(removeGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateGroupThunk = (groupId, userId, info) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/groups/${groupId}/${userId}`, info);
      dispatch(updateGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const subToGroup = (groupId, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/api/groups/${groupId}/add-user/${userId}`);
      dispatch(getGroup(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const unSubToGroup = (groupId, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `/api/groups/${groupId}/add-user/${userId}`
      );
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
    case REMOVE_GROUP:
      const removed = state.filter((group) => {
        return group.id !== action.id;
      });
      return { ...state, group: removed };
    case UPDATE_GROUP:
      return action.data;
    default:
      return state;
  }
}
