import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class NavSignedIn extends Component {
    state = { isMenuActive: false }

    handleOpenMenu = () => {
        this.setState({ isMenuActive: true });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuActive: false });
    }

    openSignedInMenu() {
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
                    <NavLink to='/my-collection'>My collection</NavLink>
                </li>
                <li>
                    <NavLink to='/search-places'>Add places</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Log out</NavLink>
                </li>
            </ul>
        )
    }

    render() {       
        return ( 
            <nav className="nav-landing">
                <NavLink to='/'>
                    <p>logo!</p>
                </NavLink>

                <button 
                    className="utensils-icon"
                    onClick={this.handleOpenMenu}
                >
                    <i className="material-icons">restaurant</i>
                </button> 

                 {this.state.isMenuActive && this.openSignedInMenu()}  

                <ul 
                    className="desktop-menu" 
                >
                    <li>
                        <NavLink to='/my-collection'>My collection</NavLink>
                    </li>
                    <li>
                        <NavLink to='/search-places'>Add places</NavLink>
                    </li>
                    <li>
                        <Link to='/'>Log out</Link>
                    </li>
                </ul>           
                
            </nav>
         );
    }
}
 
export default NavSignedIn;