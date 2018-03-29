import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message, Row, Col, Card, Switch } from 'antd';
import Homepage from '../Homepage/Homepage'
import {store} from '../../App.js'
import './Basis.css';

class Basis extends Component {
constructor(props){
  super(props)
  this.state = {
    animated: false,
    animatedOne: -1
  }
  }
  componentDidMount() {
  }  
  componentWillUnmount() {
    

}

animatedAll = (checked) => {
  checked && this.setState({animated: true});
  !checked && this.setState({animated: false});

};
animatedOne = (i) => {
  this.setState({animatedOne: i});
};
animatedOneOver = () => {
  this.setState({animatedOne: -1});
};
  sure = (e) => {
      
  }  
  render() {
    const animations = [
        'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
        'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
        'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
        'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
        'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
        'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
        'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
        'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
        'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
        'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
        'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
    ];
    return (
      <div  style={{padding:'16px'}}>
          <Row>
              <div>全部动画(单个动画请移动鼠标)</div>
              <Switch onChange={this.animatedAll} />
          </Row>
          <Row gutter={14}>
              {animations.map((v, i) => (
                  <Col className="" md={6} key={i}>
                      <div className="gutter-box">
                          <Card
                              className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''} ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${v}`}
                              onMouseEnter={() => this.animatedOne(i)}
                              onMouseLeave={() => this.animatedOneOver()}
                          >
                              <div className="pa-m text-center">
                                  <h3>{v}</h3>
                              </div>
                          </Card>
                      </div>
                  </Col>
              ))}
          </Row>
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
)(withRouter(Basis));