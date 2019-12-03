import React, { Component } from 'react';
import './Places.css';
import StarRatings from 'react-star-ratings';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';
import pasta from './icons/pasta.png';
import taco from './icons/taco.png';

class PlacesItem extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  isSaved(id) {
    const { collectionList } = this.context;
    return !!collectionList.find((place) => place.id === id);
  }

  renderCategoryIcons() {
    const { categories } = this.props;

    return categories.map((cat) => {
      if (cat.title === 'Italian') {
        return <img src={pasta} alt="pasta-icon" className="pasta-icon" />;
      }
      
      if (cat.title === 'Mexican') {
        return <img src={taco} alt="taco-icon" className="taco-icon" />;
      }
    })
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { id, name, rating, isClosed, img } = this.props;
    // eslint-disable-next-line object-curly-newline
    const myProps = { id, name, rating, isClosed };

    return (
      <>
        <div className="restaurant-card-item">

          <div className="image-placeholder">
            <img src={img} alt="restaurant" className="restaurant-image" />
          </div>
          <h3 className="place-title">{name}</h3>

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

          <div>{this.renderCategoryIcons()}</div>

          <div className="place-is-open">
            <p>{isClosed ? 'Closed Now' : 'Open Now'}</p>
          </div>

          {this.isSaved(id)
            ? <UndoButton {...myProps} />
            : <AddButton {...myProps} />}

        </div>
      </>
    );
  }
}

export default PlacesItem;
