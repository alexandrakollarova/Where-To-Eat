import React, { Component } from 'react';

class Geolocation extends Component {
    state = { 
        latitude: "",
        longitude: ""
    }

    componentDidMount() {        
        this.getLocation()
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
      
    showPosition(position) {
        this.setState({ 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude 
        });      
    }

    render() { 
        return ( 
            <></>
         );
    }
}
 
export default Geolocation;