
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import { createStore } from 'redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import Login from './project/Login/Login'
import Homepage from './project/Homepage/Homepage'
import Error404 from './project/404/Error'
import Menulist from './project/Menulist/Menulist'

import reducer from './reducers/reducer'
import { Provider } from 'react-redux'



// Store
export const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
                <Switch>
                    <Route  path="/" component={Homepage}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route  path="/Error404" component={Error404}/>
                    <Redirect to="/Error404" /> 
                </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
