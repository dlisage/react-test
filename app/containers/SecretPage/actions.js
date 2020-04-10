/*
 * Signin Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import axios from 'axios';
import { SECRET } from './constants';
import { SIGNIN_FAILED } from '../SigninPage/constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
const secret = async (dispatch, ownProps) => {
  debugger;
  const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : '';
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  };
  axios.get('http://localhost:8000/api/v1/auth/secret1', config)
    .then((response) => {
      debugger
      console.log(response);
      dispatch({ type: SECRET, info: response.data.message });
    })
    .catch((error) => {
      debugger;
      console.log(error);
      ownProps.history.push('/sign_in');
      dispatch({ type: SIGNIN_FAILED, error: 'You do not have permission to the page.', failed: true });
      // dispatch({ type: SECRET });
    });
};

export { secret };
