import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchPlaces from './SearchPlaces';
import Rating from './Rating';
import ConfigIcon from './ConfigIcon';

describe('Smoke tests for components in HomePage folder', () => {
  it('ConfigIcon renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConfigIcon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Rating renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rating />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SearchPlaces renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SearchPlaces />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});