import { ADD_COCKTAILS } from '../actions/ActionTypes';

const initialState = [];

export const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COCKTAILS:
      return action.payload.cocktails;
    default:
      return state;
  }
};
