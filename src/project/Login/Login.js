import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { LOGINCLICK } from '../../actions/action'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { menulist } from '../../content/content';
import Countdown from '../Countdown/Countdown'
import { Row, Col,Select,Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {store} from '../../App.js'
import './Login.css';
var fun;
const FormItem = Form.Item;
const Option = Select.Option;


class NormalLoginForm extends Component {
  static propTypes = {
    ifLoading: PropTypes.bool.isRequired,
};
constructor(props){
  super(props)
  this.state = {
    disabled:false,
    count:60,
    moreget:false,
    name:'',
    pass:'',
    code:'',
    phone:'',
  }
  }
  componentDidMount() {
    fun = store.subscribe(()=>{  //监听
      if(!store.getState().ifLoading){
        this.messageshow('登入失败...');
    }else{
      this.messageshow('登入成功...');
      let history = this.props.history;
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        store.dispatch(LOGINCLICK({name:this.state.name,pass:this.state.pass,identifyingcode:this.state.code,phone:this.state.phone}));
      }
    });
  }
  onChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;    
    if(id === 'name'){this.setState({name:value})}else if(id === 'pass'){this.setState({pass:value})}else if(id === 'code'){this.setState({code:value})}else if(id === 'phone'){this.setState({phone:value})};
  }
  captcha = (e) => {
    e.preventDefault();
    this.setState({
      disabled:!this.state.disabled,
      moreget:true,
    })
  }
  onTimer = () => {     //及时动作
    if(this.state.count!==0){
        this.setState({count: this.state.count - 1});
    }else {
        this.setState({
          disabled:!this.state.disabled,
          count:5,
        });
    }
};

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 50 },
        sm: { span: 50 },
      },
      wrapperCol: {
        xs: { span: 50 },
        sm: { span: 50 },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
      <div style={{width:'100vx',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Form onSubmit={this.handleSubmit} className="login-form" style={{padding:'20px',border:'solid 2px #ddd',borderRadius:'5px'}}>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" onChange={this.onChange}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('pass', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" onChange={this.onChange}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('phone', {
            rules: [{ required: false, message: '请输入手机号!' }],
          })(
            <Input addonBefore={prefixSelector} placeholder="手机号"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          <Row type="flex" align="middle">
            <Col span={12}>
              {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input type="text" placeholder="短信验证码" maxLength="6" onChange={this.onChange}/>
              )}
            </Col>
            <Col span={12} style={{display:'flex',justifyContent:'center'}}>
            <Button onClick={this.captcha} disabled={this.state.disabled}><span>{!this.state.moreget ? '获取':'重新获取'}</span>{this.state.disabled ? <span><Countdown interval={1000} onTimer={this.onTimer}/>{this.state.count} 秒</span>:null}</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住账号</Checkbox>
          )}
          <a className="login-form-forgot">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登 入
          </Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

function mapStateToProps(state) {
  return {
    ifLoading: state.ifLoading        //用到什么数据要引入
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
)(withRouter(Login));