import { combineReducers } from 'redux';
import { user } from './reducers/user';

// Combining both reducers
const reducers = combineReducers({
  user,
});

export default reducers;
