import React, { Component } from 'react';
import AppContext from '../AppContext';
import DemoPlacesItem from './DemoPlacesItem';
import DemoPopup from './DemoPopup';

class DemoPlacesList extends Component {
  static contextType = AppContext;

  render() {
    const { places } = this.props;
    return (
      <div className="restaurant-card-grid">
        <DemoPopup />

        {places.map((place) => (
          <DemoPlacesItem
            key={place.id}
            id={place.id}
            name="Some Title Some Title"
            isClosed={place.is_closed}
            rating={place.rating}
            added={place.added}
            img={place.image_url}
            isSaved={false}
          />
        ))}
      </div>
    );
  }
}

export default DemoPlacesList;