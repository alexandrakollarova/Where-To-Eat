import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DemoPage from '../DemoPage/DemoPage';
import DemoPlacesItem from '../DemoPage/DemoPlacesItem';
import DemoPlacesList from '../DemoPage/DemoPlacesList';
import DemoPopup from '../DemoPage/DemoPopup';
import DemoSearchPlaces from '../DemoPage/DemoSearchPlaces';
import DemoWelcomePage from '../DemoPage/DemoWelcomePage';

describe('Smoke tests for components in DemoPage folder', () => {
  it('DemoPage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DemoPage />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DemoPlacesItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DemoPlacesItem />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DemoPlacesList renders without crashing', () => {
    const div = document.createElement('div');
    const searchResults = [];

    ReactDOM.render(
      <BrowserRouter>
        <DemoPlacesList places={searchResults} />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DemoPopup renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DemoPopup />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DemoSearchPlaces renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DemoSearchPlaces />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DemoWelcomePage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DemoWelcomePage />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});