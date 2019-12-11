import React, { Component } from 'react';
import AppContext from '../AppContext';
import './Forms.css';
import AuthApiService from '../services/auth-api-service';

class LoginForm extends Component {
  static contextType = AppContext;

  state = {
    username: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    },
    error: null
  }

  updateUsername(username) {
    this.setState({ username: { value: username, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    AuthApiService.postLogin({
      user_name: username,
      user_password: password
    })
      .then(res => {
        this.context.handleUserSignedIn()
        this.context.hideModalForLoginForm()
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  }

  render() {
    const handleShowHideModal = this.context.showLoginForm ? "display-block" : "display-none";

    return (
      <div className="forms">
        <form onSubmit={e => this.handleSubmit(e)} className={handleShowHideModal}>
          <fieldset>
            <legend>Login</legend>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={e => this.updateUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name='password'
              id="password"
              onChange={e => this.updatePassword(e.target.value)}
            />

            <div>{this.state.error}</div>

            <div className='btn-forms-wrapper-left'>
              <button
                type="submit"
                className="btn-forms"
              >
                Login
              </button>
            </div>

            <div className='btn-forms-wrapper-right'>
              <button
                type="reset"
                className="btn-forms"
                onClick={this.context.hideModalForLoginForm}
              >
                Maybe later
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginForm;