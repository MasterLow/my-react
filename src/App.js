import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from './actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message } from 'antd';
import Homepage from './project/Homepage/Homepage'
import {store} from './index.js'
import './App.css';

var fun;
class App extends Component {
constructor(props){
  super(props)
  this.state = {
      
  }
  }
  componentDidMount() {
    // console.log(this.props);
    // if(JSON.parse(sessionStorage.getItem('ifthrow')) && JSON.parse(sessionStorage.getItem('ifthrow')).ifthrow){
    //   console.log(this.props);
    // }else{
    //   let history = this.props.history;
    //   history.push("/");  //未登入
    // };
  }  
  componentWillUnmount() {
    

}

  sure = (e) => {
      
  }  
  render() {

    return (
          <Homepage/>
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
)(withRouter(App));