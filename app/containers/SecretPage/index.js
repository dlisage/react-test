import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { secret } from './actions';
import reducer from './reducer';
import SecretPage from './SecretPage';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPage: async () => secret(dispatch, ownProps)
  };
};
const mapStateToProps = (state) => {
  return {
    info: state.secret.info
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'secret', reducer });
export default withRouter(compose(withReducer, withConnect)(SecretPage));

export { mapDispatchToProps };
