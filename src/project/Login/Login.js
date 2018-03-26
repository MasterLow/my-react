
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { LOGINCLICK } from '../../actions/action'
import { connect } from 'react-redux'
import { Icon,Spin,Button,message } from 'antd';
import {store} from '../../index.js'
import './Login.css';
var fun;
class Login extends Component {
  static propTypes = {
    ifLoading: PropTypes.bool.isRequired,
};
constructor(props){
  super(props)
  this.state = {
    loadingshow:false,
    link:false,
  }
  }
  componentDidMount() {
    fun = store.subscribe(()=>{  //监听
      if(!store.getState().ifLoading){
        this.messageshow('登入失败...');
      this.setState({
        loadingshow:false,
      })
    }else{
      this.messageshow('登入成功...');
      let history = this.props.history;
      this.setState({
        loadingshow:false,
      })
      history.push("/Homepage");
    };
  })

  }  
  componentWillUnmount() {
    fun();
}
  messageshow = (e) => {
    message.destroy();
    message.loading(e, 2.5); 
  }  
  sure = (e) => {
    this.setState({
      loadingshow:true,
    })
    setTimeout(() => {
      store.dispatch(LOGINCLICK({name:this.refs.name.value,pass:this.refs.pass.value,identifyingcode:this.refs.identifyingcode.value}));
    }, 1000);
  }  
  input1 = (e) => {
    
  }  
  input2 = (e) => {
    
  }  
  input3 = (e) => {
    
  }  
  render() {
   
    return (
      <div  className='bodyDiv'>
           <div className='ADiv'>
              <img className="imgDiv"/>
           </div>
        <div>
           <form className='FormDiv'>
               <div style={{display:'flex',flexDirection:'column'}}>
                  <div style={{display:'flex',flexDirection:'row',margin:'10px'}}>
                   <input ref="name" type="text" placeholder='用户名' className="inputDiv"/>
                   <div className='leftDiv' style={{width:'40px',height:'40px',backgroundColor:'#fff',borderLeft:'solid 1px #ddd'}}><Icon type="user" style={{fontSize:'16px'}}/></div>
                  </div>
                  <div style={{display:'flex',flexDirection:'row',margin:'10px'}}>
                   <input ref="pass" type="password" placeholder='密码' className="inputDiv"/>
                   <div  className='leftDiv' style={{width:'40px',height:'40px',backgroundColor:'#fff',borderLeft:'solid 1px #ddd'}}><Icon type="unlock" style={{fontSize:'16px'}}/></div>
                  </div>
                  <div style={{display:'flex',flexDirection:'row',margin:'10px'}}>
                   <input ref="identifyingcode" type="text" placeholder='验证码' className="inputDiv"/>
                   <div  className='leftDiv' style={{width:'40px',height:'40px',backgroundColor:'#fff',borderLeft:'solid 1px #ddd'}}><Icon type="unlock" style={{fontSize:'16px'}}/></div>
                  </div>
                  <Button type="primary" style={{width:'290px',height:'40px',margin:'10px'}}  onClick={this.sure}>登 入</Button>
               </div>
           </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ifLoading: state.ifLoading        //用到什么数据要引入
  }
}


function mapDispatchToProps(dispatch) {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
