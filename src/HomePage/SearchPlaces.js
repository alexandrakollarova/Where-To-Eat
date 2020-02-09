import React, { Component } from 'react';
import Header from '../Header/Header';
import './Homepage.css';
import PlacesList from '../AllPlaces/PlacesList';
import AppContext from '../AppContext';
import slider from './slider.png';
import ConfigIcon from './ConfigIcon';
import config from '../config';
import Geocode from "react-geocode";

class SearchPlaces extends Component {
  static contextType = AppContext;

  state = {
    latitude: '',
    longitude: '',
    searchInput: '',
    places: this.context.places,
    rating: 0,
    allPassedCategories: [],
    isOpen: false,
    error: null,
    city: "",
    noResultsFound: "No restaurants match this criteria."
  }

  componentDidMount() {
    const showPosition = (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }, () => {
        const { latitude, longitude } = this.state;

        Geocode.setApiKey(config.GOOGLE_API_KEY);

        Geocode.enableDebug();

        Geocode.fromLatLng(latitude, longitude).then(
          response => {
            const address = response.results[6].formatted_address;
            this.setState({ city: address });
          },
          error => this.setState({ error: error })
        );

        fetch(`${config.API_ENDPOINT}/businesses?lat=${latitude}&long=${longitude}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((e) => Promise.reject(e))
            } else {
              return res.json()
            }
          })
          .then((data) => {
            if (data === undefined || data.length === 0) {
              this.setState({
                error: "We were not able to retrieve any restaurants in your current location. We apologize for this inconvienence.",
                places: []
              })
            } else {
              this.setState({ places: data.businesses });
            }
          })
          .catch(error => this.setState({ error: error }));
      });
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.setState({ error: "You denied the request to track your location. Please, allow the location in your browser." });
          break;
        case error.POSITION_UNAVAILABLE:
          this.setState({ error: "Your current location is unavailable or cannot be tracked. We appologize for this inconvienence." });
          break;
        case error.TIMEOUT:
          this.setState({ error: "The request to get your location timed out. Please refresh the page and try again." });
          break;
        case error.UNKNOWN_ERROR:
          this.setState({ error: "Something went wrong with fetching your location. We appologize for this inconvienence." });
          break;
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }

  updateSearchInput = (searchInput) => {
    this.setState({ searchInput });
  }

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
                  placeholder="e.g. Dominos"
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
            <div>
              <p className="location-error">{this.state.error}</p>
            </div>
          </form>
          <ConfigIcon
            updateStars={this.updateStars}
            updateCategory={this.updateCategory}
            updateIsOpen={this.updateIsOpen}
            handleNeverMind={this.handleNeverMind}
          />

          {this.state.places.length !== 0
            ? <PlacesList
              places={searchResults}
              city={this.state.city}
              noResultsFound={searchResults.length === 0 && this.state.noResultsFound}
            />
            : (
              <div className="loading-error">
                <h1>Loading...</h1>
              </div>
            )
          }
        </main>
      </>
    );
  }
}

export default SearchPlaces;
