import React, { Component } from 'react';
import './ConfigIcon.css'

class Rating extends Component {

  state = {
    rating: this.props.rating || null,
    temp_rating: null
  }

  rate(rating) {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
  }

  star_over(rating) {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;
    
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  }

  star_out() {
    this.state.rating = this.state.temp_rating;
    
    this.setState({ rating: this.state.rating });
  }

  render() {
    let stars = [];
    
    for(var i = 1; i <= 5; i++) {
      let style = 'star-rating__star';
      
      if (this.state.rating >= i && this.state.rating != null) {
        style += ' is-selected';
      }

      stars.push(
        <label
          key={i}
          className={style}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out.bind(this)}>
          ★
        </label>
      );
    }
    
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}
 
export default Rating;
