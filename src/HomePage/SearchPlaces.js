import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../Header/Header';
import './Homepage.css';
import PlacesList from '../Places/PlacesList';
import AppContext from '../AppContext';
import slider from './slider.png';
import ConfigIcon from './ConfigIcon';
import config from '../config';
import Geolocation from './Geolocation/Geolocation';

class SearchPlaces extends Component {
    static contextType = AppContext;

    state = {
        latitude: "",
        longitude: "",
        searchInput: "",
        places: this.context.places,
        rating: 0,
        allPassedCategories: [],
        isOpen: false
    }

    updateSearchInput = (searchInput) => this.setState({ searchInput })

    updateStars = (rating) => this.setState({ rating })

    //updateIsOpen = (isOpen) => this.setState({ isOpen: !isOpen })
    updateIsOpen = (isOpen) => this.setState({ isOpen: isOpen })

    updateCategory = (category, isChecked) => {
        let { allPassedCategories } = this.state;

        if (isChecked) {
            allPassedCategories = allPassedCategories.concat([category]);
        } else {
            allPassedCategories = allPassedCategories.filter(cat => cat !== category);
        }

        this.setState({ allPassedCategories });
    }

    searchResults = () => {
        let results = this.state.places;

        if (this.state.searchInput) {
            results = results.filter(place =>
               place.name.toLowerCase().charAt(0).includes(this.state.searchInput.toLowerCase())
               || place.name.toLowerCase().match(this.state.searchInput.toLowerCase())
            )
        }

        if (this.state.allPassedCategories.length > 0) {
            results = results.filter(place => {
                return !!place.categories.find(cat => {
                    return this.state.allPassedCategories.includes(cat.title);
                });
            })
        }

        if (this.state.rating > 0) {
            results = results.filter(place => place.rating >= this.state.rating);
            console.log(results)
        }

        if (this.state.isOpen) {
            results = results.filter(place => !place.is_closed);
        } 
        // else {
        //     results = results.filter(place => place.is_closed)
        // }
   
        return results;
    }

    componentDidMount() {
        
        const showPosition = (position) => {
            this.setState({ 
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude 
            })   
        }
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        console.log(this.state.latitude)

        fetch(`${config.API_ENDPOINT}/businesses`, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
          .then(data => {
            this.setState({ places: data.businesses })
          })
    }

    onConfigIconClick = () => {
        this.context.showModalForConfigWindow()
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
                {/* <Geolocation showPosition={this.showPosition} /> */}

                <Header />

                <main className='search-places-main'>

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

                                <input
                                    className="search-input"
                                    type="text"
                                    name="search-input"
                                    onChange={e => this.updateSearchInput(e.target.value)}
                                />

                                <img
                                    src={slider}
                                    alt="slider-icon"
                                    className="search-slider"
                                    onClick={this.onConfigIconClick}
                                >
                                </img>
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
