import React from 'react';
import design from './design.png';
import upToDate from './up-to-date.png';

const Funnels = () => (
  <section className="funnels">
    <ul>
      <li>
        <img
          src={design}
          alt="design-icon"
          className="design-icon"
        />
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
        <img
          src={upToDate}
          alt="design-icon"
          className="design-icon"
        />
        <h3>Keep it up-to-date</h3>
        <p>
          Found a new cool restaurant? Add it into your portfolio, so you don't forget it.
        </p>
      </li>
    </ul>
  </section>
);

export default Funnels;
