import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import AppContext from '../AppContext';

class MyCollectionItem extends Component {
  static contextType = AppContext;

  removePlaceFromCollection(index) {
    this.context.unsavePlace(index);
  }

  render() {
    const { id, name, rating, isClosed, img } = this.props;
    const specialPosition = { 'marginTop': '0px' };

    return (
      <>
        <div className='restaurant-card-item' style={specialPosition}>

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
            <p>{isClosed ? "Closed Now" : "Open Now"}</p>
          </div>

          <button
            id={id}
            type="button"
            className="btn-remove-place"
            onClick={() => this.removePlaceFromCollection(id)}
          >
            REMOVE
          </button>
        </div>
      </>
    );
  }
}

export default MyCollectionItem;