import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AppContext from '../AppContext';
import './Header.css';

class NavSignedOut extends Component {
    static contextType = AppContext;

    state = { isMenuActive: false }

    handleOpenMenu = () => {
        this.setState({ isMenuActive: true });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuActive: false });
    }

    onSignupClick = () => {
        this.handleCloseMenu();
        this.context.showModalForSignupForm();
    }

    openSignedOutMenu() {
        return ( 
                <ul 
                    className="open-menu" 
                    style={{display: this.state.isMenuActive ? 'block' : 'none' }}
                >
                    <button 
                        type="button"
                        className="close-icon"
                        onClick={this.handleCloseMenu}
                    > 
                        <i className="material-icons">close</i>
                    </button>

                    <li>
                        <button 
                            type="button" 
                            className="btn-signup-modal"
                            onClick={this.onSignupClick}
                        >
                            Sign Up
                        </button>
                    </li>
                    <li>
                        <NavLink to='/demo-page'>Demo</NavLink>
                    </li>
                </ul>
        )
    }
   
    render() {         
        return ( 
            <nav className="nav-landing">
            {/* wrap the logo as a link to home page */}
                <NavLink to='/'>
                    <p>logo!</p>
                </NavLink>

                <button 
                    type="button"
                    className="utensils-icon"
                    onClick={this.handleOpenMenu}
                >
                    <i className="material-icons">restaurant</i>
                </button> 
                
                {this.state.isMenuActive && this.openSignedOutMenu()}   

                 <ul 
                    className="desktop-menu" 
                >
                    <li>
                        <NavLink to='/demo-page'>Demo</NavLink>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="btn-signup-modal"
                            onClick={this.onSignupClick}
                        >
                            Sign Up
                        </button>
                    </li>                    
                </ul>          

            </nav>
         );
    }
}
 
export default NavSignedOut;