import React, { Component } from 'react';
import PropTypes from 'prop-types'
import  { LOGINCLICK } from '../../actions/action'
import { connect } from 'react-redux'
import { Button } from 'antd';
import {store} from '../../index.js'
import { Redirect } from 'react-router-dom'
import './Error.css';

class Error404 extends Component {
  
constructor(props){
  super(props)
  this.state = {
    ifback:false
  }
  }
  componentDidMount() {
  }  

  back = (e) => {
      this.setState({
        ifback:true
      })
  }  
  render() {

    return (
        <div className="wrap">
          <div className="content">
          
            
            <div className="errorinfo">
                {/* {  <Button type="primary" onClick={this.back}>B a c k</Button>  }		 */}
            </div>
            <div className="miscbox">
              <div className="tower"></div>
              <div className="towerlight"></div>
              <div className="beam"></div>
            </div>
          </div>
          <div className="wave1"><div className="wave"></div></div>
        </div>
        
      
    );
  }
}


export default Error404
