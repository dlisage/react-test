/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { debug } from 'webpack';

export default class SignoutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { loadPage } = this.props;
    loadPage();
  }

  render() {
    return (<div />);
  }
}

SignoutPage.propTypes = {
  loadPage: PropTypes.func
};
