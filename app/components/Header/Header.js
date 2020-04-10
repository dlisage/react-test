import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  signButtons() {
    const { signedIn, name } = this.props;
    if (signedIn) {
      return (
        <React.Fragment>
          <Link className="router-link" to="/sign_out">
            Sign Out
          </Link>
          <span className="name">{name}</span>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Link className="router-link" to="/sign_up">
          Sign Up
        </Link>
        <Link className="router-link" to="/sign_in">
          Sign In
        </Link>
      </React.Fragment>
    );

  }

  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
          {this.signButtons()}
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  signedIn: PropTypes.bool,
  name: PropTypes.string
};

export default Header;
