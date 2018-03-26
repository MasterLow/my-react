
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import  Login from './project/Login/Login'
import  Homepage from './project/Homepage/Homepage'
import  Error404 from './project/404/Error'

import reducer from './reducers/reducer'
import { Provider } from 'react-redux'



// Store
export const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Homepage" component={Homepage}/>
                    <Route exact path="/Error404" component={Error404}/>
                </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
