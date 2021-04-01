import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cocktails } from './reducers/cocktails';
import { groups } from './reducers/groups';
import { matchesAndMembers } from './reducers/matchesAndMembers';

// Combining both reducers
const reducers = combineReducers({
  user,
  cocktails,
  groups,
  matchesAndMembers,
});

export default reducers;
