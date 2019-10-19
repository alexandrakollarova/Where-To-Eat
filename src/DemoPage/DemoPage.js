import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';

class DemoPage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Header />

                <main>
                    <div className='headline'>
                        <h1>Some header</h1>
                        <p>(background image)</p>

                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </h4>

                        <div className='image-wrapper'></div>

                    </div>
                </main>

                <Footer />        
            </>
         );
    }
}
 
export default DemoPage;