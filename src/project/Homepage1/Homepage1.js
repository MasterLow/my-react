import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message, Row, Col, Card, Switch,Breadcrumb } from 'antd';
import Homepage from '../Homepage/Homepage'
import {store} from '../../App.js'
import './Homepage1.css';

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
      <div style={{}}>
      
      
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