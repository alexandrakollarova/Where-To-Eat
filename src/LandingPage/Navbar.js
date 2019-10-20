import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AppContext from '../AppContext';

class Navbar extends Component {

    static contextType = AppContext;

    render() {
        return ( 
            <nav>
                <p>logo!</p>
                <ul>
                    <button 
                        type="button" 
                        className="btn-signup-modal"
                        onClick={this.context.showModal}
                    >
                        Sign Up
                    </button>

                    <NavLink to='/demo-page'>Demo</NavLink>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;