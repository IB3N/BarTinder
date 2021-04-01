import { ADD_USER, LOGOUT } from './ActionTypes';

export const setUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});

export const logout = () => ({ type: LOGOUT });
