import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import './Homepage.css';
import PlacesList from '../Places/PlacesList';
import AppContext from '../AppContext';

class Homepage extends Component {
    static contextType = AppContext;

    state = {
        searchInput: ""
    }

    updateSearchInput(searchInput) {
        this.setState({ searchInput: searchInput });
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchInput = this.state

        const filtered = this.context.places.filter(place => 
            place.name === searchInput
        )   

        this.context.updateSearchResults(filtered)
    }

    render() { 
        return ( 
            <>
                <Header />

                <main className='home-screen-select'>
                    
                    <h2>Tousands of restaurants in one place!</h2>

                        <form onSubmit={e => this.handleSubmit(e)}>

                            <button type="submit">
                                <i className="material-icons">search</i>
                            </button>
                                
                            <input 
                                type="text"
                                name="search-input"
                                placeholder="Enter city or name of the place"
                                onChange={e => this.updateSearchInput(e.target.value)}
                            />

                            <div className="filter-options-group">
                                <input 
                                type="radio"
                                name="filter-option"
                                value="All"
                                //    checked={}
                                //    onChange={}
                                />
                                    All
                                    
                                <input 
                                type="radio"
                                name="filter-option"
                                value="Popular"
                                //    checked={}
                                //    onChange={}
                                />
                                    Popular

                                <input 
                                type="radio"
                                name="filter-option"
                                value="Favorite"
                                //    checked={}
                                //    onChange={}
                                />
                                    Favorite
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
 
export default Homepage;