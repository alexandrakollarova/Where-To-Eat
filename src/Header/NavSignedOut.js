import React, { Component } from 'react';
import AppContext from '../AppContext';
import OpenSignedOutMenu from './OpenSignedOutMenu';

class NavSignedOut extends Component {
    static contextType = AppContext;

    state = { menuActive: false }

    handleOpenMenu = () => {
        this.setState({ menuActive: true });
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
                
                {this.state.menuActive 
                    && <OpenSignedOutMenu menuActive={this.state.menuActive} />}             

            </nav>
         );
    }
}
 
export default NavSignedOut;