import { LOAD_APP } from './constants';

// The initial state of the App
export const initialState = {
  signedIn: false,
  name: ''
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APP: {
      return { ...state, name: action.name, signedIn: action.signedIn };
    }
    default:
      return state;
  }
}

export default appReducer;
