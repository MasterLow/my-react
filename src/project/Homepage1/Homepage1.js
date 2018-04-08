import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message, Row, Col, Card, Switch,Breadcrumb } from 'antd';
import Homepage from '../Homepage/Homepage'
import {store} from '../../App.js'
import Slider from '../Slider/Slider';

import './Homepage1.css';

const IMAGE_DATA = [
  {
    src: require('../../images/demo1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('../../images/demo2.jpg'),
    alt: 'images-2',
  },
  {
    src: require('../../images/demo3.jpg'),
    alt: 'images-3',
  },
];
class Homepage1 extends Component {
constructor(props){
  super(props)
  this.state = {
    
  }
  }
  componentDidMount() {

    
  }  
  componentWillUnmount() {
    

}
  sure = (e) => {
      
  }  
  render() {
    return (
      <div>
      <Slider
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={true}
      />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage1));