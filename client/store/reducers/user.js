import { ADD_USER, LOGOUT } from '../actions/ActionTypes';

const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload.user;
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
