import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './Footer';
import Funnels from './Funnels';
import LandingMain from './LandingMain';
import PageNotFound from './PageNotFound';

describe('Smoke tests for components in LandingPage folder', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Funnels renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Funnels />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LandingMain renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LandingMain />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('PageNotFound renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageNotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})


