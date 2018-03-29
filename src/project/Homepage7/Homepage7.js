import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message, Row, Col, Card, Switch } from 'antd';
import Homepage from '../Homepage/Homepage'
import {store} from '../../App.js'
import './Homepage7.css';

class Homepage6 extends Component {
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
      <div  style={{width:'500px',height:'500px',background:'gold'}}>
            page7

            {this.props.children}
            
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
)(withRouter(Homepage6));