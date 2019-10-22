import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import AppContext from '../AppContext';

class OpenSignedOutMenu extends Component {
    static contextType = AppContext;

    state = {
        isMenuActive: this.props.isMenuActive
    }

    render() { 

        return ( 
            <ul className="open-menu">
                <button 
                    type="button"
                    className="close-icon"
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