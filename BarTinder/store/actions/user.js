import { ADD_USER } from './ActionTypes';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});
