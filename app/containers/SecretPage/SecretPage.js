/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default class SecretPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { loadPage } = this.props;
    loadPage();
  }

  render() {
    const { info } = this.props;
    return (
      <article>
        <Helmet>
          <title>Aggdata Data Pipleline</title>
          <meta name="description" content="Aggdata Data Pipleline" />
        </Helmet>
        <div className="home-page">
          <section>
            {info}
          </section>
        </div>
      </article>
    );
  }
}

SecretPage.propTypes = {
  loadPage: PropTypes.func,
  info: PropTypes.string
};
