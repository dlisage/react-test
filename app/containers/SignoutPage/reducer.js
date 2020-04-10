import { SIGNOUT } from './constants';

// The initial state of the App
const initialState = {
  name: '',
  signedIn: false
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SIGNOUT:
      return { ...state, name: '', signedIn: false };
    default:
      return state;
  }
};

export default reducer;
