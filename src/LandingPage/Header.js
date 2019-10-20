import React, { Component } from 'react';
import Navbar from './Navbar';
import HomepageNav from '../HomePage/HomepageNav';
import AppContext from '../AppContext';

class Header extends Component {
    static contextType = AppContext;

    render() { 
        return ( 
            <header>
                {
                    this.context.isSignedIn 
                    ? <HomepageNav /> 
                    : <Navbar />
                }
            </header>
         );
    }
}
 
export default Header;