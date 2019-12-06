import React, { Component } from 'react';
import './ConfigIcon.css';
import StarRatings from 'react-star-ratings';

class Rating extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { rating: 0 };

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateStars(newRating);
  }

  render() {
    return (
      <StarRatings
        // eslint-disable-next-line react/destructuring-assignment
        rating={this.state.rating}
        starRatedColor="#FFBB2E"
        starEmptyColor="grey"
        starDimension="20px"
        starHoverColor="#FFBB2E"
        changeRating={() => this.changeRating.bind(this)}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}
export default Rating;
