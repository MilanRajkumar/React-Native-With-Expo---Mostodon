import { ACTION_USERS_LIST_SUCCESS, ACTION_USERS_LIST_FAIL, ACTION_USERS_LIST } from './types';
import { NetworkService } from '../services';


export const actionGetUsersList = () => {
  return (dispatch) => {
    NetworkService.getUsersList()
    .then((responseJson) => {
      dispatch({type: ACTION_USERS_LIST_SUCCESS, payload: responseJson})
    })
    .catch ((error) => {
      dispatch(ACTION_USERS_LIST_FAIL);
    });
  }
}
