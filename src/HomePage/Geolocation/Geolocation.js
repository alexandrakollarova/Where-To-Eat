import React, { Component } from 'react';

class Geolocation extends Component {

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.props.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    
    render() {         
        return <></>
    }
}
 
export default Geolocation;