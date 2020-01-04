import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavSignedIn from './NavSignedIn';
import NavSignedOut from './NavSignedOut';
import Header from './Header';

describe('Smoke tests for components in Header folder', () => {
  it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavSignedln renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavSignedIn />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavSignedOut renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavSignedOut />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});