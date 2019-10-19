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
                    <button type="button" onClick={this.context.showModal}>Sign Up</button>
                    <NavLink to='/demoPage'>Demo</NavLink>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;