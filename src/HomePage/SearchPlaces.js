/* eslint-disable no-console */
import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../Header/Header';
import './Homepage.css';
import PlacesList from '../Places/PlacesList';
import AppContext from '../AppContext';
import slider from './slider.png';
import ConfigIcon from './ConfigIcon';
import config from '../config';

class SearchPlaces extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = AppContext;

  // eslint-disable-next-line react/state-in-constructor
  state = {
    latitude: '',
    longitude: '',
    searchInput: '',
    // eslint-disable-next-line react/destructuring-assignment
    places: this.context.places,
    rating: 0,
    allPassedCategories: [],
    isOpen: false,
  }

  componentDidMount() {
    const showPosition = (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }, () => {
        const { latitude, longitude } = this.state;

        // eslint-disable-next-line no-undef
        fetch(`${config.API_ENDPOINT}/businesses?lat=${latitude}&long=${longitude}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => ((!res.ok)
            ? res.json().then((e) => Promise.reject(e))
            : res.json()))
          .then((data) => {
            this.setState({ places: data.businesses });
          });
      });
    };

    // eslint-disable-next-line no-undef
    if (navigator.geolocation) {
      // eslint-disable-next-line no-undef
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // eslint-disable-next-line no-console
      console.log('Geolocation is not supported by this browser.');
    }
  }

  updateSearchInput = (searchInput) => {
    this.setState({ searchInput });
  }

  updateStars = (rating) => this.setState({ rating })

  // updateIsOpen = (isOpen) => this.setState({ isOpen: !isOpen })
  updateIsOpen = (isOpen) => this.setState({ isOpen })

  updateCategory = (category, isChecked) => {
    let { allPassedCategories } = this.state;

    if (isChecked) {
      allPassedCategories = allPassedCategories.concat([category]);
    } else {
      allPassedCategories = allPassedCategories.filter((cat) => cat !== category);
    }

    this.setState({ allPassedCategories });
  }

  searchResults = () => {
    // eslint-disable-next-line object-curly-newline
    const { places, searchInput, allPassedCategories, rating, isOpen } = this.state;
    let results = places;

    if (searchInput) {
      // eslint-disable-next-line max-len
      results = results.filter((place) => (place.name.toLowerCase().charAt(0).includes(searchInput.toLowerCase())
          || place.name.toLowerCase().match(searchInput.toLowerCase())));
    }

    if (allPassedCategories.length > 0) {
      // eslint-disable-next-line max-len
      results = results.filter((place) => !!place.categories.find((cat) => allPassedCategories.includes(cat.title)));
    }

    if (rating > 0) {
      results = results.filter((place) => place.rating >= rating);
    }

    if (isOpen) {
      results = results.filter((place) => !place.is_closed);
    }

    return results;
  }

  onConfigIconClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.context.showModalForConfigWindow();
  }

  handleNeverMind = () => {
    this.setState({ allPassedCategories: [], isOpen: true, rating: 0 });
    // eslint-disable-next-line react/destructuring-assignment
    this.context.hideModalForConfigWindow();
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const searchResults = this.searchResults();

    return (
      <>
        <Header />

        <main className="search-places-main">

          <h2 className="headline">
            Tousands of restaurants
            <br />
            in one place!
          </h2>

          <form onSubmit={this.handleSubmit}>
            <div className="search-input-and-config-wrapper">
              <button
                type="submit"
                className="search-icon"
              >
                <i className="material-icons">search</i>
              </button>

              <div>
                <input
                  className="search-input"
                  type="text"
                  name="search-input"
                  onChange={(e) => this.updateSearchInput(e.target.value)}
                />
              </div>

              <div
                onClick={this.onConfigIconClick}
                onKeyPress={this.onConfigIconClick}
                role="presentation"
              >
                <img
                  src={slider}
                  alt="slider-icon"
                  className="search-slider"
                />
              </div>

            </div>
          </form>
          <ConfigIcon
            updateStars={this.updateStars}
            updateCategory={this.updateCategory}
            updateIsOpen={this.updateIsOpen}
            handleNeverMind={this.handleNeverMind}
          />
          <PlacesList places={searchResults} />
        </main>

        <Footer />
      </>
    );
  }
}

export default SearchPlaces;
