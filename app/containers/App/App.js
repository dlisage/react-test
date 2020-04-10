/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import SecretPage from 'containers/SecretPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import SigninPage from 'containers/SigninPage/Loadable';
import SignoutPage from 'containers/SignoutPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { loadPage } = this.props;
    loadPage();
  }

  render() {
    debugger;
    const { name, signedIn } = this.props;
    return (
      <div className="app-wrapper">
        <Helmet
          titleTemplate="%s - Aggdata Pipeline"
          defaultTitle="Aggdata Pipeline"
        >
          <meta name="description" content="Aggdata Pipeline" />
        </Helmet>
        <Header name={name} signedIn={signedIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={SecretPage} />
          <Route path="/sign_up" component={SignupPage} />
          <Route path="/sign_in" component={SigninPage} />
          <Route path="/sign_out" component={SignoutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  signedIn: PropTypes.bool,
  name: PropTypes.string,
  loadPage: PropTypes.func
};
