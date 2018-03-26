import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { HistoryLOGIN } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message } from 'antd';
import {store} from '../../index.js'
import './Homepage.css';

var fun;
class Homepage extends Component {
  static propTypes = {
    ifLoading: PropTypes.bool.isRequired,
};
constructor(props){
  super(props)
  this.state = {
      
  }
  }
  componentDidMount() {
    console.log(this.props);
    if(JSON.parse(sessionStorage.getItem('ifthrow')) && JSON.parse(sessionStorage.getItem('ifthrow')).ifthrow){
      console.log(this.props);
    }else{
      let history = this.props.history;
      history.push("/");  //未登入
    };
  }  
  componentWillUnmount() {
    

}

  sure = (e) => {
      
  }  
  render() {

    return (
      <div className="App">
      Homepage
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ifLoading: state.ifLoading
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
)(withRouter(Homepage));
