import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { SLIDERSHOW } from './actions/action'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import {store} from './index.js'
import Menulist from './project/Menulist/Menulist'
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

    
  }  
  onCollapse = (collapsed) => {
    this.setState({ collapsed: !this.state.collapsed  });
    store.dispatch(SLIDERSHOW({ SLIDER_SHOW: this.state.collapsed }));
  }

  sure = (e) => {
      
  }  
  render() {

    return (
      <Layout>
      <Sider
			    theme="dark" 
			    mode="inline"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,boxShadow:'3px 0px 3px #7A7A7A'}}>
          <div className="logo1" />
          <Menulist  ref="getSwordButton"/>
      </Sider>
      <Layout className={ this.state.collapsed ? 'margin1' : 'margin'} style={{ height:'100vh' }}>
        <Header style={{ background: '#fff', padding: 0 ,height:'50px',margin:'10px 16px 0',borderRight:'solid 1px #ddd',borderBottom:'solid 1px #ddd'}} />
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
function mapStateToProps(state) {
  return {
    
  }
}


function mapDispatchToProps(dispatch) {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);