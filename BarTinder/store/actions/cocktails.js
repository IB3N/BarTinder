import { ADD_COCKTAILS } from '../actions/ActionTypes';

export const addCocktails = (cocktails) => ({
  type: ADD_COCKTAILS,
  payload: {
    cocktails,
  },
});
