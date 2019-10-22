import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import AppContext from '../AppContext';

class OpenSignedOutMenu extends Component {
    static contextType = AppContext;

    state = { isMenuActive: this.props.handleMenu }

    handleCloseMenu = () => {
        this.setState({ isMenuActive: false });
    }

    render() { console.log(this.state.isMenuActive)
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
                        onClick={this.context.showModal}
                    >
                        Sign Up
                    </button>
                </li>
                <li>
                    <NavLink to='/demo-page'>Demo</NavLink>
                </li>
            </ul>
        );
    }
}
 
export default OpenSignedOutMenu;