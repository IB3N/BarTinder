import { ADD_USER } from '../actions/ActionTypes';
const initialState = {
  user: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
