import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddButton from '../AllPlaces/AddButton';
import PlacesItem from '../AllPlaces/PlacesItem';
import PlacesList from '../AllPlaces/PlacesList';
import UndoButton from '../AllPlaces/UndoButton';

describe('Smoke tests for components in AllPlaces folder', () => {
  it('AddButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddButton />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('PlaceItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PlacesItem />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('PlaceList renders without crashing', () => {
    const div = document.createElement('div');
    const searchResults = [];

    ReactDOM.render(
      <BrowserRouter>
        <PlacesList places={searchResults} />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('UndoButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <UndoButton />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
