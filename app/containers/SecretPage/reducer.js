import { SECRET } from './constants';

// The initial state of the App
const initialState = {
  secret: ''
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SECRET:
      return { ...state, info: action.info };
    default:
      return state;
  }
};

export default reducer;
