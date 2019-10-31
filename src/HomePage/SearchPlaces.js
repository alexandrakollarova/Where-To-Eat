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
        searchInput: "",
        filteredPlaces: this.context.places
    }

    updateSearchInput(searchInput) {
        this.setState({ searchInput: searchInput });

        this.setState({ 
            filteredPlaces: this.context.places.filter(place =>           
               place.name.toLowerCase().includes(searchInput.toLowerCase())
            )   
        });
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {        
        return ( 
            <>
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
                                >                                
                                </img>
                            </div>
                        </form>
                        <PlacesList places={this.state.filteredPlaces} />                       
                </main>

                <Footer />                
            </>
         );
    }
}
 
export default SearchPlaces;