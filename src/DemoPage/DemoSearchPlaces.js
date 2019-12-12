import React, { Component } from 'react';
import Header from '../Header/Header';
import '../HomePage/Homepage.css';
import DemoPlacesList from './DemoPlacesList';
import AppContext from '../AppContext';
import slider from '../HomePage/slider.png';
import ConfigIcon from '../HomePage/ConfigIcon';
import config from '../config';

class DemoSearchPlaces extends Component {
  static contextType = AppContext;

  state = {
    latitude: '',
    longitude: '',
    searchInput: '',
    places: this.context.places,
    rating: 0,
    allPassedCategories: [],
    isOpen: true,
  }

  componentDidMount() {
    const showPosition = (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }, () => {
        const { latitude, longitude } = this.state;

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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  updateSearchInput = (searchInput) => this.setState({ searchInput }) 

  updateStars = (rating) => this.setState({ rating })

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
    const { places, searchInput, allPassedCategories, rating, isOpen } = this.state;
    let results = places;

    if (searchInput) {
      results = results.filter((place) => (place.name.toLowerCase().charAt(0).includes(searchInput.toLowerCase())
        || place.name.toLowerCase().match(searchInput.toLowerCase())));
    }

    if (allPassedCategories.length > 0) {
      results = results.filter((place) => !!place.categories.find((cat) => allPassedCategories.includes(cat.title)));
    }

    if (rating > 0) {
      results = results.filter((place) => place.rating >= rating);
    }

    if (isOpen) { 
      results = results.filter((place) => !place.is_closed);
    } else {
      results = results.filter((place) => place.is_closed);
    }

    return results;
  }

  onConfigIconClick = () => {
    this.context.showModalForConfigWindow();
  }

  handleNeverMind = () => {
    this.setState({ allPassedCategories: [], isOpen: true, rating: 0 });
    this.context.hideModalForConfigWindow();
  }

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

              <div>
                <input
                  className="search-input"
                  type="text"
                  name="search-input"
                  onChange={(e) => this.updateSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="search-icon"
                >
                  <i className="material-icons">search</i>
                </button>
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
          <DemoPlacesList places={searchResults} />
        </main>

      </>
    );
  }
}

export default DemoSearchPlaces;