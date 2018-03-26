import React, { Component } from 'react';
import PropTypes from 'prop-types'
import  { LOGINCLICK } from './actions/action'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import {store} from './index.js'
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
  }
  }
  componentDidMount() {
      console.log('55555');
  }  
  onCollapse = (collapsed) => {
    console.log(collapsed);

    
    this.setState({ collapsed });
  }

  sure = (e) => {
      
  }  
  render() {

    return (
      <Layout>
      <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,boxShadow:'3px 0px 3px #7A7A7A'}}>
        <div className="logo1" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={ this.state.collapsed ? 'margin1' : 'margin'} style={{ height:'100vh' }}>
        <Header style={{ background: '#fff', padding: 0 ,height:'50px'}} />
        <Content style={{ margin: '16px 16px 0', overflow: 'initial',height:'100%',background: '#fff',borderRight:'solid 1px #ddd',borderBottom:'solid 1px #ddd' }}>
          <div style={{ padding: 24, textAlign: 'center' }}>
          
            ...
            <br />
            Really
            <br />...<br />...<br />...<br />
            long
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center',padding: 0 ,lineHeight:'50px' }}>
          OOOXXXX      OOOO   XXXXX
        </Footer>
      </Layout>
    </Layout>
    );
  }
}


export default App