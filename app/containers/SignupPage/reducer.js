import { SIGNUP, SIGNUP_FAILED } from './constants';

// The initial state of the App
const initialState = {
  error: '',
  failed: false
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SIGNUP:
      return { ...state, error: '', failed: false };
    case SIGNUP_FAILED:
      return { ...state, error: action.error, failed: true };
    default:
      return { ...state, error: '', failed: false };
  }
};

export default reducer;
