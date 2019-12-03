/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import AppContext from '../AppContext';

class DemoCollectionItem extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  removePlaceFromCollection(index) {
    const { unsavePlace } = this.context;
    unsavePlace(index);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line object-curly-newline
    // eslint-disable-next-line react/prop-types
    const { id, name, stars, isOpen } = this.props;
    // eslint-disable-next-line no-trailing-spaces

    const index = id;

    return (
      <>
        <div className="restaurant-card-item">

          <div className="image-placeholder">
            <img src="" alt="temporary-placeholder" />
          </div>
          <h3 className="place-title">{name}</h3>

          <div className="place-rating">
            <StarRatings
              rating={stars}
              starRatedColor="yellow"
              starEmptyColor="grey"
              starDimension="20px"
              starHoverColor="yellow"
              numberOfStars={5}
              name="rating"
            />
          </div>

          <div className="place-is-open">
            <p>{isOpen ? 'Open Now' : 'Closed Now'}</p>
          </div>

          <button
            id={index}
            type="button"
            className="btn-add-place"
            onClick={() => this.removePlaceFromCollection(index)}
          >
            Remove
          </button>
        </div>
      </>
    );
  }
}

export default DemoCollectionItem;
