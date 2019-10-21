import React, { Component } from 'react';

class OpenHamburgerMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <ul className="hamburger-menu">
                <button className="close-icon"> 
                    <i class="material-icons">close</i>
                </button>

                <li>My collection</li>
                <li>Log out</li>
            </ul>
        );
    }
}
 
export default OpenHamburgerMenu;