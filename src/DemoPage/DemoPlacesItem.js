import React, { Component } from 'react';
import '../AllPlaces/Places.css';
import StarRatings from 'react-star-ratings';
import AppContext from '../AppContext';

class DemoPlacesItem extends Component {
  static contextType = AppContext;

  renderPopup() {
    return <p>Signup for more</p>
  }

  render() {
    const { id, name, rating, isClosed, img } = this.props;

    return (
      <>
        <div className="restaurant-card-item">

          <div className="image-placeholder">
            <img src={img} alt="restaurant" className="restaurant-image" />
          </div>
          <h2 className="place-title">{name}</h2>

          <div className="place-rating">
            <StarRatings
              rating={rating}
              starRatedColor="#FFBB2E"
              starEmptyColor="grey"
              starDimension="20px"
              starHoverColor="yellow"
              numberOfStars={5}
              name="rating"
            />
          </div>

          <div className="place-is-open">
            <p>{isClosed ? 'Closed Now' : 'Open Now'}</p>
          </div>

          <div>
            <button
              type="button"
              className="btn-add-place"
              onClick={() => this.renderPopup()}
            >
              Add
            </button>
          </div>

        </div>
      </>
    );
  }
}

export default DemoPlacesItem;
