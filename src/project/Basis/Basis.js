import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message } from 'antd';
import Homepage from '../Homepage/Homepage'
import {store} from '../../index.js'
import './Basis.css';

class Basis extends Component {
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
         <div style={{width:'500px',height:'500px',background:'gold'}}>Basis</div>
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