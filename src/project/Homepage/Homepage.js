
import React, {Component} from 'react';
import { Route, Link, Switch, withRouter, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import {SLIDERSHOW} from '../../actions/action'
import {connect} from 'react-redux'
import {Layout, Menu, Icon} from 'antd';
import {store} from '../../App.js'
import Menulist from '../Menulist/Menulist'
import { menulist } from '../../content/content';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom'
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
  componentWillReceiveProps(nextProps) {  
    // const { pathname } = nextProps.location;
    // console.log(pathname.split('/').filter(i => i));
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
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}>
          <div className="logo1">
            <div
              className='imgsmall'>
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
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center'
          }}>
          <div>
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
          className='IconTypeleft'/>
            </div>
          </div>

              <div style={{fontSize:'20px',color:'#fff'}}>OOOO OOOO OOOO OOOO</div>

              <div>
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
              className='IconTypeleft'/>
                </div>
              </div>
          </Header>
          <Content style={{
            overflow: 'initial'
          }}>
            <div
              style={{
              height:'30px',
              display:'flex',
              flexDirection:'row',
              alignItems:'center'
            }}>
            <Icon type='home' style={{fontSize:'16px',paddingLeft:'10px',paddingRight:'5px'}}/>
            <BreadcrumbCustom />
            </div>
            <div
              style={{
              margin:'0 10px 10px 10px',
              background: '#fff',
              minHeight:menulist.Height-140+'px'
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