import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../Header/Header';
import './Homepage.css';
import PlacesList from '../Places/PlacesList';
import AppContext from '../AppContext';
import slider from './slider.png'

class SearchPlaces extends Component {
    static contextType = AppContext;

    state = {
        searchInput: ""
    }

    updateSearchInput(searchInput) {
        this.setState({ searchInput: searchInput });
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchInput = this.state.searchInput

        const filtered = this.context.places.filter(place => 
            place.name === searchInput
        )   
        this.context.updateSearchResults(filtered)
    }

    render() { 
        return ( 
            <>
                <Header />

                <main className='search-places-main'>
                    
                    <h2 className="headline">Tousands of restaurants 
                        <br />
                        in one place!
                    </h2>

                        <form onSubmit={e => this.handleSubmit(e)}>
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
                                    // placeholder="Enter city or name of the place"
                                    onChange={e => this.updateSearchInput(e.target.value)}
                                />
                                
                                <img 
                                    src={slider} 
                                    alt="slider-icon"
                                    className="search-slider"
                                >                                
                                </img>
                            </div>
                        </form>
                        {/* <i className="material-icons">&#xe145;</i> */}
                        <PlacesList />
                       
                </main>

                <Footer />                
            </>
         );
    }
}
 
export default SearchPlaces;