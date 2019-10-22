import React, { Component } from 'react';
import AppContext from '../AppContext';
import OpenSignedOutMenu from './OpenSignedOutMenu';

class NavSignedOut extends Component {
    static contextType = AppContext;

    state = { isMenuActive: false }

    handleOpenMenu = () => {
        this.setState({ isMenuActive: true });
    }
   
    render() { 
        return ( 
            <nav className="nav-landing">
                <p>logo!</p>

                <button 
                    type="button"
                    className="utensils-icon"
                    onClick={this.handleOpenMenu}
                >
                    <i className="material-icons">restaurant</i>
                </button> 
                
                {this.state.isMenuActive 
                    && <OpenSignedOutMenu handleMenu={this.state.isMenuActive} />}             

            </nav>
         );
    }
}
 
export default NavSignedOut;