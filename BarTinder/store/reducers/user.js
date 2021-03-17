import { ADD_USER } from '../actions/ActionTypes';
const initialState = {
  user: {
    id: 1,
    firstName: 'Ben',
    lastName: 'Pearce',
    email: 'ben@email.com',
    username: 'Ben',
    password: 'ben',
    friends: null,
    createdAt: '2021-03-09T10:39:06.060Z',
    updatedAt: '2021-03-09T10:39:06.060Z',
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
