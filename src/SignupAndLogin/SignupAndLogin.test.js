import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ValidationError from './ValidationError';

describe('Smoke tests for components in SignupAndLogin folder', () => {
  it('LoginForm renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SignupForm renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignupForm />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('ValidationError renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ValidationError />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});