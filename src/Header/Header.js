import React, { Component } from 'react';
import NavSignedOut from './NavSignedOut';
import NavSignedIn from './NavSignedIn';
import AppContext from '../AppContext';

class Header extends Component {
    static contextType = AppContext;

    render() { 
        return ( 
            <header>
                {
                    this.context.isSignedIn 
                    ? <NavSignedIn /> 
                    : <NavSignedOut />
                }
            </header>
         );
    }
}
 
export default Header;