import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { signup } from './actions';
import reducer from './reducer';
import SignupPage from './SignupPage';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (email, password, name) => signup(dispatch, ownProps, email, password, name)
  };
};

const mapStateToProps = (state) => {
  return {
    error: state.signup.error,
    failed: state.signup.failed
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
export default withRouter(compose(withReducer, withConnect)(SignupPage));
