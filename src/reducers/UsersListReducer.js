import { ACTION_USERS_LIST_SUCCESS, ACTION_USERS_LIST_FAIL, ACTION_USERS_LIST } from '../actions/types';

const INITIAL_STATE = [{
  id: '',
  first_name: '',
  last_name: '',
  avatar: ''
}];
export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ACTION_USERS_LIST_SUCCESS:
		return action.payload
		case ACTION_USERS_LIST_FAIL:
      return state;
    default:
      return state;
  }
}
