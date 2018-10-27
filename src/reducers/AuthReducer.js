import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  sign_up_success_msg: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        sign_up_success_msg: ''
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', sign_up_success_msg: '', loading: false };
    case SIGNUP_USER_SUCCESS:
      // console.log(state);
      let result = {
        ...state,
        ...INITIAL_STATE,
        user: action.payload.user,
        error: '',
        sign_up_success_msg: action.payload.sign_up_success_msg
      }
      // console.log(result);
      return result
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Creation of account is failed.', sign_up_success_msg: '', loading: false };
    default:
      return state;
  }
}
