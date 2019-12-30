import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../AllPlaces/Places.css';
import Carousel from 'nuka-carousel';
import AppContext from '../AppContext';
import MyCollectionItem from './MyCollectionItem';
import Header from '../Header/Header';
import '../HomePage/Carousel.css';
import config from '../config';
import avo from './icons/avo.png';
import './MyCollection.css'

class MyCollectionList extends Component {
  static contextType = AppContext;

  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 100,
      wrapAround: false,
      slidesToShow: 3,
      cellAlign: 'center',
      transitionMode: 'scroll3d',
      withoutControls: false,
      usersPlaces: [],
      framePadding: '0px',
      enableKeyboardControls: true,
    };
  }

  componentDidMount() {
    const { activeUserId } = this.context;

    fetch(`${config.API_ENDPOINT}/users_businesses?user=${activeUserId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          const error = res.json();
          throw error;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ usersPlaces: data });
        this.context.setCollectionList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="my-collection-container">
        <Header />
        <>
          <img src={avo} alt="avo-background" className="avo-img" />
           
          {this.state.usersPlaces.length == 0
            && 
              <>
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
                  to="/search"
                >
                  DISCOVER RESTAURANTS
                </Link>
              </>
          }
        </>

        {/* <h3 className="swipe-left-right-text">Swipe left and right</h3> */}

        <Carousel
          withoutControls={this.state.withoutControls}
          transitionMode={this.state.transitionMode}
          cellAlign={this.state.cellAlign}
          slidesToShow={this.state.slidesToShow}
          wrapAround={this.state.wrapAround}
          slideIndex={this.state.slideIndex}
          framePadding={this.state.framePadding}
          enableKeyboardControls={this.state.enableKeyboardControls}
        >
          {this.context.collectionList.slice(0, this.state.length).map((place) => (
            <MyCollectionItem
              key={place.id}
              id={place.id}
              name={place.name}
              isClosed={place.isClosed}
              rating={place.rating}
              onClick={this.handleImageClick}
              img={place.image_url}
            />
          ))}
        </Carousel>

      </div>
    );
  }
}

export default MyCollectionList;
