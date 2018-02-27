import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import RatingsHistogram from './components/ratingsHistogram';
import ReviewList from './components/reviewList';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  // componentWillMount
  componentDidMount() {
    const { location: { pathname } } = window;
    const productID = Number(pathname.split('/').pop());
    $.get('/product/:id', { productID }, (data) => {
      console.log('data recieved from server to component', data);
      this.setState({
        reviews: data,
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Customer Reviews</h3>
        <div>HISTOGRAM</div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}
ReactDOM.render(<ReviewSection />, document.getElementById('ReviewSection'));