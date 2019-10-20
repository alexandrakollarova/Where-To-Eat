import React, { Component } from 'react';

class HomepageNav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <p>logo!</p>
                
                <ul>
                    <li><i class="fas fa-bars"></i></li>
                    <li class='my-collection-link'>My collection</li>
                    <li class='edit-collection-link'>Edit collection</li>
                    <li class='logout-link'>Log out</li>
                </ul>
            </nav>
         );
    }
}
 
export default HomepageNav;