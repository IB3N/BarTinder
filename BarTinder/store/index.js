import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cocktails } from './reducers/cocktails';

// Combining both reducers
const reducers = combineReducers({
  user,
  cocktails,
});

export default reducers;
