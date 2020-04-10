/*
 * App Actions
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
import {
  LOAD_APP
} from './constants';

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
const loadApp = async (dispatch) => {
  debugger;
  const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : '';
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  };
  axios.get('http://localhost:8000/api/v1/auth/profile', config)
    .then((response) => {
      debugger;
      console.log(response);
      dispatch({ type: LOAD_APP, name: response.data.name, signedIn: response.data.signedIn });
    })
    .catch((error) => {
      debugger;
      console.log(error);
      dispatch({ type: LOAD_APP, signedIn: false });
    });
};

export { loadApp };
