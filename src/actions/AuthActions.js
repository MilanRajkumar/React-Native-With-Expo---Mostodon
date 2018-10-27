import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from './types';

import { NetworkService } from '../services';

const loginUserSuccess  = (dispatch, user, history) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    console.log(email, password);
    // dispatch({ type: LOGIN_USER })
  }
}

export const signUpUser = (user_data) => {
  return (dispatch) => {
    let payload = {user: 'teteute', sign_up_success_msg: 'Account Created Successfully'}
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: payload})
    // NetworkService.signup(user_data)
    // .then((responseJson) => {
    //   dispatch({ type: SIGNUP_USER_SUCCESS, user: responseJson, sign_up_success_msg: 'Account Created Successfully'})
    // })
    // .catch ((error) => {
    //   // loginUserFail(dispatch)
    //   console.log(error)
    // });
  }
}
