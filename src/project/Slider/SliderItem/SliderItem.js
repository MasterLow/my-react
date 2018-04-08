import React, { Component } from 'react';
import '../style/common.css';

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <img className="slider-item-img" src={item.src} alt={item.alt} />
      </li>
    );
  }
}

export default SliderItem;