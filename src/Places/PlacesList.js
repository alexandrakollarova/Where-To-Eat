import React, { Component } from 'react';
import AppContext from '../AppContext';
import PlacesItem from './PlacesItem';

class PlacesList extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  render() {
    const { places } = this.props;
    return (
      <>
        {places.map((place) => (
          <PlacesItem
            key={place.id}
            id={place.id}
            name={place.name}
            isClosed={place.is_closed}
            rating={place.rating}
            added={place.added}
            img={place.image_url}
            categories={place.categories}
          />
        ))}
      </>
    );
  }
}

export default PlacesList;
