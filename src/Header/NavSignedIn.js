import React, { Component } from 'react';
import OpenSignedInMenu from './OpenSignedInMenu';

class NavSignedIn extends Component {
    state = {
        menuActive: false
    }

    handleClickMenu = () => {
        this.setState({ menuActive: true });
    }

    render() {       
        return ( 
            <nav className="nav-homepage">
                <p>logo!</p>

                <button 
                    className="utensils-icon"
                    onClick={this.handleClickMenu}
                >
                    <i className="material-icons">restaurant</i>
                </button> 

                 {this.state.menuActive && <OpenSignedInMenu />}             
                
            </nav>
         );
    }
}
 
export default NavSignedIn;