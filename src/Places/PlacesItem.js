import React, { Component } from 'react';
import './Places.css';
import StarRatings from 'react-star-ratings';
import AddButton from './AddButton';
import UndoButton from './UndoButton';
import AppContext from '../AppContext';
// import pasta from './icons/pasta.png';
// import taco from './icons/taco.png';
// import burger from './icons/burger.png';
// import pizza from './icons/pizza.png';
// import seafood from './icons/seafood.png';
// import sushi from './icons/sushi.png';
// import sandwich from './icons/sandwich.png';
// import bb from './icons/bb.png';
// import medi from './icons/medi.png';
// import bakeries from './icons/bakeries.png'

class PlacesItem extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  isSaved(id) {
    const { collectionList } = this.context;
    return !!collectionList.find((place) => place.id === id);
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

          {/* <div>{this.renderCategoryIcons()}</div> */}

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
