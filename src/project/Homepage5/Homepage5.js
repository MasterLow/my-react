import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { menulist } from '../../content/content';
import { Row, Col,Select,Form, Icon, Input, Button, Checkbox } from 'antd';
import {store} from '../../App.js'
import './Homepage5.css';
const FormItem = Form.Item;
const Option = Select.Option;


class NormalLoginForm extends Component {
constructor(props){
  super(props)
  this.state = {
  }
  }
  componentDidMount() {
  }  
  componentWillUnmount() {
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
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
      <div style={{width:'100%',minHeight:menulist.Height-140+'px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('用户名', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('密码', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          {getFieldDecorator('手机号', {
            rules: [{ required: false, message: '请输入手机号!' }],
          })(
            <Input addonBefore={prefixSelector} placeholder="手机号"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          >
          <Row type="flex" justify="space-around">
            <Col span={8}>
              {getFieldDecorator('验证码', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input />
              )}
            </Col>
            <Col span={8}>
              <Button>获取</Button>
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
           <a>马上注册!</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const Homepage5 = Form.create()(NormalLoginForm);

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
)(withRouter(Homepage5));