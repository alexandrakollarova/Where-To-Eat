import React, { Component } from 'react';

class OpenSignedInMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <ul className="open-menu">
                <button className="close-icon"> 
                    <i className="material-icons">close</i>
                </button>

                <li>My collection</li>
                <li>Log out</li>
            </ul>
        );
    }
}
 
export default OpenSignedInMenu;