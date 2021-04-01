import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cocktails } from './reducers/cocktails';
import { groups } from './reducers/groups';

// Combining reducers
const reducers = combineReducers({
  user,
  cocktails,
  groups,
});

export default reducers;
