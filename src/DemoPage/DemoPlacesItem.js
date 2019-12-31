import React, { Component } from 'react';
import '../AllPlaces/Places.css';
import StarRatings from 'react-star-ratings';
import AppContext from '../AppContext';

class DemoPlacesItem extends Component {
  static contextType = AppContext;

  onAddClick() {
    this.context.showModalForPopup();
  }

  render() { 
    const { name, rating, isClosed, img } = this.props;

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
            <p style={{ fontSize: '14px', letterSpacing: '0.5px' }}>{isClosed ? 'Closed Now' : 'Open Now'}</p>
          </div>

          <div className="btns-wrapper">
            <button
              type="button"
              className="btn-add-place"
              onClick={() => this.onAddClick()}
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
