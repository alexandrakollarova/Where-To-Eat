import React, { Component } from 'react';

class Funnels extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='funnels'>
                <ul>
                    <li>
                        <p>(icon)</p>
                        <h3>Design it yourself</h3>
                        <p>
                           Design a portfolio of your preferred eateries & fast food joints.
                        </p>
                    </li>
                    <li>
                        <p>(icon)</p>
                        <h3>Let it decide for you</h3>
                        <p>
                            Have fun swapping through your fav spots and narrow down your options! 
                        </p>
                    </li>                    
                    <li>
                        <p>(icon)</p>
                        <h3>Keep it up-to-date</h3>
                        <p>
                            Found a new cool restaurant? Add it into your portfolio, so you don't forget it.
                        </p>
                    </li>                
                </ul>
            </section>    
         );
    }
}
 
export default Funnels;