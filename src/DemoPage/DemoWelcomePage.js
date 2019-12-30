import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import Header from '../Header/Header';
import avo from '../SavedPlaces/icons/avo.png';

class DemoWelcomePage extends Component {
  static contextType = AppContext;

  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 100,
      wrapAround: false,
      slidesToShow: 1,
      cellAlign: 'left',
      transitionMode: 'scroll',
      withoutControls: false,
    };
  }

  render() {

    return (
      <div className="my-collection-container">
        <Header />
        
        <>
          <img src={avo} alt="avo-background" className="avo-img" />

          <h1 className="headline-welcome">
            Welcome
          </h1>

          <p className="discover-places-text">
            Enjoy swiping through your list of restaurants and narrow down your choice.
            <br />
            Don't have any saved restaurants in your collection? Discover them now!
          </p>

          <Link
            type="button"
            className="btn-discover-places"
            to="/demo-search"
          >
            DISCOVER RESTAURANTS
          </Link>
        </>
      </div>
    );
  }
}

export default DemoWelcomePage;