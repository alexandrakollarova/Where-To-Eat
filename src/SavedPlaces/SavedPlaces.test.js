import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyCollectionItem from './MyCollectionItem';
import MyCollectionList from './MyCollectionList';

describe('Smoke tests for components in SavedPlaces folder', () => {
  it('MyCollectionItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <MyCollectionItem />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('MyCollectionList renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <MyCollectionList />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});