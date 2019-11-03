import React, {Component} from 'react';
import './ConfigIcon.css';
import StarRatings from 'react-star-ratings';

class Rating extends Component {
 
    state = {
      rating: 1
    };
 
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
    this.props.updateStars(this.state.rating)
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="yellow"
        starEmptyColor="grey"
        starDimension="20px"
        starHoverColor="yellow"
        changeRating={this.changeRating.bind(this)}
        numberOfStars={5}
        name='rating'
      />
    );
  }
}
 export default Rating;



