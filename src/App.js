import React,{Component} from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createStore } from 'redux'
import Login from './project/Login/Login'
import Basis from './project/Basis/Basis'
import Homepage from './project/Homepage/Homepage'
import Homepage1 from './project/Homepage1/Homepage1'
import Homepage2 from './project/Homepage2/Homepage2'
import Homepage3 from './project/Homepage3/Homepage3'
import Homepage4 from './project/Homepage4/Homepage4'
import Homepage5 from './project/Homepage5/Homepage5'
import Homepage6 from './project/Homepage6/Homepage6'
import Homepage7 from './project/Homepage7/Homepage7'
import Error404 from './project/404/Error'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import './App.css';
// Store
export const store = createStore(reducer)

const routes =[
  { path: '/', component: Login, exact:true},
  { path: '/login', component: Login},
  { path: '/Homepage', component: Homepage,routes:[
      { path: '/Homepage', component: Homepage1,exact:true},
      { path: '/Homepage/page2/1', component: Basis},
      { path: '/Homepage/page2/2', component: Homepage3},
      { path: '/Homepage/page3/1', component: Homepage2},
      { path: '/Homepage/page4/1', component: Homepage5},
      { path: '/Homepage/page5/1', component: Homepage6},
      { path: '/Homepage/page6/1', component: Homepage7},
      { path: '/Homepage/page7/1', component: Error404},
      { path: '/Homepage/page8/1', component: Login},
  ]},
//   { path: '/Homepage1/page1', component: Homepage,routes:[
//       { path: '/Homepage1/page1', component: Homepage2, exact:true},
//       { path: '/Homepage1/page1/page1', component: Error404},
//   ]},
//   { path: '/Homepage2/page2', component: Homepage,routes:[
//       { path: '/Homepage2/page2', component: Homepage3, exact:true},
//       { path: '/Homepage2/page2/page2', component: Error404},
//   ]},
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