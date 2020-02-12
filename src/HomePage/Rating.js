import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Rating extends Component {
  state = { rating: 0 };

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
    this.props.updateStars(newRating);
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#FFBB2E"
        starEmptyColor="grey"
        starDimension="20px"
        starHoverColor="#FFBB2E"
        changeRating={props => this.changeRating(props)}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}
export default Rating;
