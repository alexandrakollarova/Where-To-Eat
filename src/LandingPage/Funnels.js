import React from 'react';

const funnel1SpecialSize = { width: '185px' };

const Funnels = () => (
  <section className="funnels">
    <ul>
      <li>
        {/* <img
          src={funnel1}
          style={funnel1SpecialSize}
          alt="design-icon"
          className="design-icon"
        /> */}
        <h3>Design it yourself</h3>
        <p>
          Design a portfolio of your preferred eateries & fast food joints.
        </p>
      </li>
      <li>
        {/* <img
          src={funnel2}
          alt="design-icon"
          className="design-icon"
        /> */}
        <h3>Let it decide for you</h3>
        <p>
          Have fun swapping through your fav spots and narrow down your options!
        </p>
      </li>
      <li>
        {/* <img
          src={funnel3}
          alt="design-icon"
          className="design-icon"
        /> */}
        <h3>Keep it up-to-date</h3>
        <p>
          Found a new cool restaurant? Add it into your portfolio, so you don't forget it.
        </p>
      </li>
    </ul>
  </section>
);

export default Funnels;
