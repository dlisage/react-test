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
import { SIGNIN, SIGNIN_FAILED } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
const signin = async (dispatch, ownProps, email, password) => {
  axios.post('http://localhost:8000/api/v1/auth/login', { email, password })
    .then((response) => {
      localStorage.setItem('jwt', response.data.token);
      debugger
      console.log(response);
      dispatch({ type: SIGNIN, name: response.data.name, signedIn: true });
      ownProps.history.push('/');
    })
    .catch((error) => {
      debugger;
      console.log(error);
      dispatch({ type: SIGNIN_FAILED, error: error.response.data.message, failed: true });
    });
};

export { signin };
