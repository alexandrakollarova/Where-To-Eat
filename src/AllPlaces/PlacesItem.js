import React, { Component } from 'react';
import './Places.css';
import StarRatings from 'react-star-ratings';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';

class PlacesItem extends Component {
  static contextType = AppContext;

  isSaved(id) {
    const { collectionList } = this.context;
    return !!collectionList.find((place) => place.id === id);
  }

  render() {
    const { id, name, rating, isClosed, img } = this.props;
    const myProps = { id, name, rating, isClosed };

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
            {this.isSaved(id)
              ? <UndoButton {...myProps} />
              : <AddButton {...myProps} />}
          </div>

        </div>
      </>
    );
  }
}

export default PlacesItem;
