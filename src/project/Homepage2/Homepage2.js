import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message, Row, Col, Card, Switch } from 'antd';
import Homepage from '../Homepage/Homepage'
import apiRequest from '../../ApiRequest/ApiRequest';
import {store} from '../../App.js'
import './Homepage2.css';

class Homepage2 extends Component {
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
        apiRequest.post('Circle/ReasonList', {
            start: 0,
            end: 20
        }, data => console.log(data), data => console.log(data))
  }  
  render() {
    return (
      <div  style={{width:'500px',height:'500px',textAlign:"center"}}>
            <Button onClick={this.sure}> apiRequest </Button >
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
)(withRouter(Homepage2));