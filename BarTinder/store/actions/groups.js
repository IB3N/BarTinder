import { ADD_GROUP, ADD_GROUPS } from './ActionTypes';

export const addGroups = (groups) => ({
  type: ADD_GROUPS,
  payload: {
    groups,
  },
});

export const addGroup = (group) => ({
  type: ADD_GROUP,
  payload: {
    group,
  },
});
