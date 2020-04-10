/*
 * Signup Actions
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
import { SIGNUP, SIGNUP_FAILED } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
const signup = (dispatch, ownProps, email, password, name) => {
  debugger;
  // return { type: SIGNUP };
  // const a = email;
  // const b = password;
  axios.post('http://localhost:8000/api/v1/auth/register', { email, password, name })
    .then((response) => {
      debugger
      console.log(response);
      dispatch({ type: SIGNUP });
      ownProps.history.push('/sign_in');
    })
    .catch((error) => {
      debugger;
      console.log(error);
      dispatch({ type: SIGNUP_FAILED, error: error.response.data.message, failed: true });
    });
};

export { signup };
