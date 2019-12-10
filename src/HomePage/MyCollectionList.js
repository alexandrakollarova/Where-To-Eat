/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Places/Places.css';
import Carousel from 'nuka-carousel';
import AppContext from '../AppContext';
import MyCollectionItem from './MyCollectionItem';
import Header from '../Header/Header';
import './Carousel.css';
import config from '../config';

class MyCollectionList extends Component {
  // eslint-disable-next-line react/static-property-placement
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

  componentDidMount() {
    const { activeUserId } = this.context;

    fetch(`${config.API_ENDPOINT}/users_businesses?user=${activeUserId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw error;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { collectionList } = this.context;

    // const greetUser = this.context.users.find((user) => user.user_id === this.context.activeUserId);
    // const user = greetUser.username.charAt(0).toUpperCase() + greetUser.username.slice(1);
    return (
      <>
        <Header />

        {collectionList.length == 0
          && (
            <>
              <h1 className="headline-welcome">
              Welcome
                <br />
                {/* {user} */}
              ,
              </h1>

              <p className="discover-places-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link
                type="button"
                className="btn-discover-places"
                to="/search"
              >
              Discover restaurants
              </Link>
            </>
          )}

        {collectionList.length > 0
          && (
            <>
              <h1>My places</h1>
              <Link to="/search">Go Back</Link>
            </>
          )}

        <Carousel
          withoutControls={this.state.withoutControls}
          transitionMode={this.state.transitionMode}
          cellAlign={this.state.cellAlign}
          slidesToShow={this.state.slidesToShow}
          wrapAround={this.state.wrapAround}
          slideIndex={this.state.slideIndex}
        >
          {collectionList.slice(0, this.state.length).map((place) => (
            <MyCollectionItem
              key={place.id}
              id={place.id}
              name={place.name}
              isClosed={place.isClosed}
              rating={place.rating}
              onClick={this.handleImageClick}
            />
          ))}
        </Carousel>

      </>
    );
  }
}

export default MyCollectionList;
