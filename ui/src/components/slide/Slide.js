import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.scss';

class Slide extends Component {
  constructor(props) {
    super(props);
    console.dir(this.props);
  }
  render() {
    return (
      <div className="slide-body">
      </div>
    )
  }
}

export default Slide;
