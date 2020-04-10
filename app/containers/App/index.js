import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import App from './App';
import { loadApp } from './actions';
import reducer from './reducer';


const mapStateToProps = (state) => ({
  name: state.global.name,
  signedIn: state.global.signedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: async () => loadApp(dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });

export default compose(withReducer, withConnect)(App);
