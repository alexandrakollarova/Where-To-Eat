import React, { Component } from 'react';
import AppContext from '../AppContext';
import DemoPlacesItem from './DemoPlacesItem';
import DemoPopup from './DemoPopup';
import '../HomePage/Homepage.css';

class DemoPlacesList extends Component {
  static contextType = AppContext;

  render() {
    const { places } = this.props;

    return (
      <>
        <h4 className="city">
          Found in {this.props.city}
        </h4>

        <h2 className="no-results">{this.props.noResultsFound}</h2>
        
      <div className="restaurant-card-grid">
        <DemoPopup />  

        {places.map((place) => (
          <DemoPlacesItem
            key={place.id}
            id={place.id}
            name={place.name}
            isClosed={place.is_closed}
            rating={place.rating}
            added={place.added}
            img={place.image_url}
            isSaved={false}
          />
        ))}
        </div>
      </>
    );
  }
}

export default DemoPlacesList;