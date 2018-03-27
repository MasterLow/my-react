
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {SLIDERSHOW} from '../../actions/action'
import {connect} from 'react-redux'
import {Layout, Menu, Icon} from 'antd';
import {store} from '../../index.js'
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
    // if(JSON.parse(sessionStorage.getItem('ifthrow')) && JSON.parse(sessionStorage.getItem('ifthrow')).ifthrow){
    //   console.log('88888');
    //   console.log(this.props);
    // }else{
    //   console.log('6666');
    //   let history = this.props.history;
    //   history.push("/Basis");  //未登入
    // };
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    store.dispatch(SLIDERSHOW({SLIDER_SHOW: this.state.collapsed}));
  }

  sure = (e) => {}
  render() {

    return (
      <Layout>
        <Sider
          theme="dark"
          mode="inline"
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          boxShadow: '3px 0px 3px #7A7A7A'
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
                border: 'solid 2px #08c'
              }}/>
            </div>
          </div>
          <Menulist ref="getSwordButton"/>
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
            borderRight: 'solid 1px #ddd',
            borderBottom: 'solid 1px #ddd',
            display: 'flex',
            flexDirection: 'row'
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
              borderRight: 'solid 1px #ddd',
              borderBottom: 'solid 1px #ddd'
            }}></div>
            <div
              style={{
              margin: '5px 10px',
              background: '#fff',
              borderRight: 'solid 1px #ddd',
              borderBottom: 'solid 1px #ddd'
            }}>

              <Switch>
                <Route exact path={this.props.match.path} component={Basis}/>
                <Route exact path={`${this.props.match.path}:Basis`} component={Error404}/>
              </Switch>

            </div>
          </Content>
          <Footer
            style={{
            background: '#fff',
            textAlign: 'center',
            padding: 0,
            lineHeight: '50px',
            borderRight: 'solid 1px #ddd',
            borderBottom: 'solid 1px #ddd',
            margin: '5px 10px'
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);