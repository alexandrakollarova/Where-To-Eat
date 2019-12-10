import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import DemoCollectionItem from './DemoCollectionItem';
import Header from '../Header/Header';
import './DemoPage.css';

class DemoCollectionList extends Component {
  static contextType = AppContext;

  render() {
    // const greetUser = this.context.users.find(user =>
    //     user.user_id === this.context.activeUserId
    //     )
    // const user = greetUser.username.charAt(0).toUpperCase() + greetUser.username.slice(1)

    return (
      <div className='demo-page'>
        <Header />

        {this.context.collectionList.length == 0 &&
          <>
            <h1 className="headline-welcome">Welcome</h1>

            <p className="discover-places-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

            <Link
              type="button"
              className="btn-discover-places"
              to='/search'
            >
              Discover restaurants
                        </Link>
          </>}
        {/* temporary header */}
        {this.context.collectionList.length > 0 &&
          <>
            <h1>My places</h1>
            <Link to="/search">Go Back</Link>
          </>}

        {this.context.collectionList.map(place =>
          <DemoCollectionItem
            key={place.id}
            id={place.id}
            name={place.name}
            isOpen={place.isOpen}
            stars={place.stars}
          />
        )}
      </div>
    );
  }
}

export default DemoCollectionList;