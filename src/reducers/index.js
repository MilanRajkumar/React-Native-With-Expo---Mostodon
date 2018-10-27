import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UsersListReducer from './UsersListReducer'

export default combineReducers({
  auth: AuthReducer,
  usersList: UsersListReducer
});
