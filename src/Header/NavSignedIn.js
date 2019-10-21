import React, { Component } from 'react';
import '../HomePage/Homepage.css';
import OpenHamburgerMenu from './OpenHamburgerMenu';

class HomepageNav extends Component {

    state = {
        hamburgerIconClicked: false
    }


    handleHamburgerIcon = () => {
        this.setState({ hamburgerIconClicked: true });
    }

    render() { 
      
        return ( 
            <nav className="nav-homepage">
                <p>logo!</p>

                <button 
                    className="utensils-icon"
                    onClick={this.handleHamburgerIcon}
                >
                    <i className="material-icons">restaurant</i>
                </button> 

                 {this.state.hamburgerIconClicked && <OpenHamburgerMenu />}             
                
            </nav>
         );
    }
}
 
export default HomepageNav;