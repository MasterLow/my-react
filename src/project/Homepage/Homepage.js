
import React, {Component} from 'react';
import { Route, Link, Switch, withRouter, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import {SLIDERSHOW} from '../../actions/action'
import {connect} from 'react-redux'
import {Layout, Menu, Icon} from 'antd';
import {store} from '../../App.js'
import Menulist from '../Menulist/Menulist'
import Error404 from '../404/Error'
import Basis from '../Basis/Basis'
import './Homepage.css';
const {Header, Content, Footer, Sider} = Layout;
class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1099350086,4245843908&fm=27&gp=0.jpg'
    }
  }
  componentDidMount() {
    if(JSON.parse(sessionStorage.getItem('ifthrow')) && JSON.parse(sessionStorage.getItem('ifthrow')).ifthrow){
      
    }else{
      let history = this.props.history;
      history.push("/Login");  //未登入
    };
  }
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed   //异步
    });
    store.dispatch(SLIDERSHOW({SLIDER_SHOW: !this.state.collapsed})); //和上面一同，得到的SLIDER_SHOW = this.state.collapsed
  }

  render() {

    return (
      <Layout>
        <Sider
          theme="dark"
          mode="inline"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          boxShadow: '3px 0px 3px #9F9F9F'
        }}>
          <div className="logo1">
            <div
              className={!this.state.collapsed
              ? 'imgbig'
              : 'imgsmall'}>
              <img
                src={this.state.imgSrc}
                style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: 'solid 2px #eee'
              }}/>
            </div>
          </div>
          <Menulist />
        </Sider>
        <Layout
          className={this.state.collapsed
          ? 'margin1'
          : 'margin'}
          style={{
          height: '100vh'
        }}>
          <Header
            style={{
            backgroundImage: 'linear-gradient(to left,#4568DC,#B06AB3)',
            padding: 0,
            height: '50px',
            margin: '5px 10px 0',
            display: 'flex',
            flexDirection: 'row',
            borderLeft: 'solid 1px #ddd',
            borderTop: 'solid 1px #ddd',
            boxShadow: '2px 2px 2px #9F9F9F'
          }}>
            <div
              style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}><Icon
              type={!this.state.collapsed
        ? 'menu-fold'
        : 'menu-unfold'}
              onClick={this.onCollapse}
              className='IconTypeleft'/></div>
          </Header>
          <Content style={{
            overflow: 'initial'
          }}>
            <div
              style={{
              margin: '5px 10px',
              height: '30px',
              textAlign: 'center',
              background: '#fff',
              borderLeft: 'solid 1px #ddd',
              borderTop: 'solid 1px #ddd',
              boxShadow: '2px 2px 2px #9F9F9F'
            }}></div>
            <div
              style={{
              padding:'6px',
              margin: '5px 10px',
              background: '#fff',
              borderLeft: 'solid 1px #ddd',
              borderTop: 'solid 1px #ddd',
              boxShadow: '2px 2px 2px #9F9F9F'
            }}>

            {this.props.children}

            </div>
          </Content>
          <Footer
            style={{
            background: '#272526',
            textAlign: 'center',
            padding: 0,
            lineHeight: '50px',
            borderLeft: 'solid 1px #ddd',
            borderTop: 'solid 1px #ddd',
            boxShadow: '2px 2px 2px #9F9F9F',
            margin: '5px 10px',
            color:'#fff'
          }}>
            OOOXXXX OOOO XXXXX
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage));