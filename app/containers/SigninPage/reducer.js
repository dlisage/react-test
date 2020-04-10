import { SIGNIN, SIGNIN_FAILED } from './constants';

// The initial state of the App
const initialState = {
  signinFailed: false,
  singinError: ''
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SIGNIN:
      return { ...state, name: action.name, signedIn: action.signedIn, ...initialState };
    case SIGNIN_FAILED:
      return { ...state, signinFailed: true, signinError: action.error };
    default:
      return { ...state, ...initialState };
  }
};

export default reducer;
