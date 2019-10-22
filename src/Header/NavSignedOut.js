import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AppContext from '../AppContext';
import OpenSignedOutMenu from './OpenSignedOutMenu';

class NavSignedOut extends Component {
    static contextType = AppContext;

    state = {
        menuActive: false
    }

    handleClickMenu = () => {
        this.setState({ menuActive: true });
    }

    render() { 
        return ( 
            <nav className="nav-landing">
                <p>logo!</p>

                <button 
                    className="utensils-icon"
                    onClick={this.handleClickMenu}
                >
                    <i className="material-icons">restaurant</i>
                </button> 
                
                {this.state.menuActive 
                    && <OpenSignedOutMenu isMenuActive={this.state.menuActive} />}             

            </nav>
         );
    }
}
 
export default NavSignedOut;