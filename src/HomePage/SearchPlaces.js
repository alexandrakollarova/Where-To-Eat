import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../Header/Header';
import './Homepage.css';
import PlacesList from '../Places/PlacesList';
import AppContext from '../AppContext';
import slider from './slider.png';
import ConfigIcon from './ConfigIcon';

class SearchPlaces extends Component {
    static contextType = AppContext;

    state = {
        searchInput: "",
        filteredPlaces: this.context.places,
        category: []
    }

    onConfigIconClick = () => {
        this.context.showModalForConfigWindow()
    }

    updateSearchInput = (searchInput) => {
        this.setState({ searchInput: searchInput });

        this.setState({ 
            filteredPlaces: this.context.places.filter(place =>           
               place.name.toLowerCase().charAt(0).includes(searchInput.toLowerCase())
            )   
        });
    }

    updateStars = (stars) => {
        if (stars)
        this.setState({ filteredPlaces: this.context.places.filter(place => 
            place.stars == stars
            ) 
        });
    }

    updateCategory = (category) => {       
        this.setState({ filteredPlaces: this.context.places.filter(place => 
            place.categories === category
            )  
        });      
    }

    updateIsOpen = (bool) => {
        this.setState({ filteredPlaces: this.context.places.filter(place =>           
            place.is_open === bool
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
                                    onClick={this.onConfigIconClick}
                                >                                
                                </img>                                
                            </div>
                        </form>
                        <ConfigIcon 
                            updateStars={this.updateStars}
                            updateCategory={this.updateCategory}
                            updateIsOpen={this.updateIsOpen}
                        />
                        <PlacesList places={this.state.filteredPlaces} />                       
                </main>

                <Footer />                
            </>
         );
    }
}
 
export default SearchPlaces;