import React, { Component } from 'react';
import SignupForm from '../SignupAndLogin/SignupForm';
import AppContext from '../AppContext';
import DemoWelcomePage from './DemoWelcomePage';
import LoginForm from '../SignupAndLogin/LoginForm';

class DemoPage extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.hideModalForSignupForm()
  }

  render() {
    return (
      <>
        <LoginForm />
        <SignupForm />
        <DemoWelcomePage />
      </>
    );
  }
}

export default DemoPage;