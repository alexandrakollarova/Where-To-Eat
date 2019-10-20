import React, { Component } from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import './DemoPage.css';

class DemoPage extends Component {
    
    render() { 
        return ( 
            <>
                <Header />

                <main>
                    <div className='main-demo'>
                        <h1 className="headline">Some header</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>

                        <div className='image-wrapper'></div>

                    </div>
                </main>

                <Footer />        
            </>
         );
    }
}
 
export default DemoPage;