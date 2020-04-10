/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// import { debug } from 'webpack';

export default class SignupPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  onChangeEmail = (ev) => this.setState({ email: ev.target.value });

  onChangePassword = (ev) => this.setState({ password: ev.target.value });

  onChangeName = (ev) => this.setState({ name: ev.target.value });


  onClickButton = (ev) => {
    ev.preventDefault();
    const { email, password, name } = this.state;
    const { onSubmit } = this.props;
    onSubmit(email, password, name);
  }

  errorMessage() {
    const { error, failed } = this.props;
    if (failed) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    }
    return ('');
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Sign Up</title>
          <meta name="description" content="Aggdata Data Pipleline" />
        </Helmet>
        <div className="home-page">
          <section>
            <form>
              {this.errorMessage()}
              <div className="form-group">
                <label >Name</label>
                <input type="text" onChange={this.onChangeName} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"/>
              </div>
              <div className="form-group">
                <label >Email</label>
                <input type="email" onChange={this.onChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.onChangePassword}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.onClickButton}>Submit</button>
            </form>
          </section>
        </div>
      </article>
    );
  }
}

SignupPage.propTypes = {
  onSubmit: PropTypes.func,
  failed: PropTypes.bool,
  error: PropTypes.string
};
