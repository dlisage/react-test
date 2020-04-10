import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { signin } from './actions';
import reducer from './reducer';
import SigninPage from './SigninPage';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: async (name, password) => signin(dispatch, ownProps, name, password)
  };
};
const mapStateToProps = (state) => {
  return {
    failed: state.global.signinFailed,
    error: state.global.signinError
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
export default withRouter(compose(withReducer, withConnect)(SigninPage));
