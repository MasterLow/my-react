import React,{Component} from 'react'
import { Route, Link, Switch, withRouter, HashRouter } from 'react-router-dom';
import { createStore } from 'redux'
import {connect} from 'react-redux'
import Login from './project/Login/Login'
import Basis from './project/Basis/Basis'
import Homepage from './project/Homepage/Homepage'
import Error404 from './project/404/Error'
import Menulist from './project/Menulist/Menulist'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import './App.css';
// Store
export const store = createStore(reducer)


const routes =[
  { path: '/', component: Login, exact:true},
  { path: '/login', component: Login},
  { path: '/Homepage', component: Homepage,routes:[
      { path: '/Homepage', component: Basis, exact:true},
      // { path: '/main/home', component: Home},
      { path: '/Homepage/Error404', component: Error404},
  ]}
]

const RouteWithSubRoutes = (route) => (
  route.exact?<Route path={route.path} exact render={props => (
      <route.component {...props} routes={route.routes}>
          <Switch>
          {route.routes&&route.routes.map((route,i)=>{
              return <RouteWithSubRoutes key={i} {...route} />
          })}
          </Switch>
      </route.component>    
  )} />:<Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes}>
         <Switch>
          {route.routes&&route.routes.map((route,i)=>{
              return <RouteWithSubRoutes key={i} {...route} />
          })}
        </Switch> 
      </route.component>    
  )} />
)
class App extends Component {
constructor(props){
  super(props)
  this.state = {
      
  }
  }
  componentDidMount() {
  }  
  componentWillUnmount() {
    

}
  render() {

    return (
      <Provider store={store}>
            <HashRouter>
                <Switch>
                {routes.map((route,i)=>{
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
                </Switch>
            </HashRouter>
      </Provider>
    );
  }
}


export default App;