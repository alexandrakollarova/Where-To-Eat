import React, { Component } from 'react';
import './DemoPage.css';
import SignupForm from '../SignupForm/SignupForm';
import AppContext from '../AppContext';
import SearchPlaces from '../HomePage/SearchPlaces';

class DemoPage extends Component {
    static contextType = AppContext;
    
    render() {   console.log(this.props)      
        return ( 
            <>
               {/* {this.context.showSignupForm && } */}
                <SignupForm />                
                <SearchPlaces />
            </>
         );
    }
}
 
export default DemoPage;