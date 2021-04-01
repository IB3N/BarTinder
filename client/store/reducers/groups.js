import { ADD_GROUP, ADD_GROUPS } from '../actions/ActionTypes';
const initialState = {
  groups: [],
};

export const group = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [payload.group, ...state.groups],
      };
    case ADD_GROUPS:
      return { ...state, groups: payload.groups };
    default:
      return state;
  }
};
