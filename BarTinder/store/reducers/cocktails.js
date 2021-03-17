import { ADD_COCKTAILS } from '../actions/ActionTypes';

const initialState = {
  cocktails: [],
};

export const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload.cocktails,
      };
    default:
      return state;
  }
};
