import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { signout } from './actions';
import reducer from './reducer';
import SignoutPage from './SignoutPage';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPage: () => signout(dispatch, ownProps)
  };
};

const withConnect = connect(() => {}, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
export default withRouter(compose(withReducer, withConnect)(SignoutPage));
