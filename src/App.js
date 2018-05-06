import React, { Component } from 'react';
import Notifications from 'react-notify-toast'
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/authComponents/Signup';
import Dashboard from './components/Blogs/Dashboard';
import PublicBlogs from './components/Blogs/PublicBlogs';
import Login from './components/authComponents/Login';
import store from './Reducers/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
        <div className="App">
        <Notifications/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/publicblogs' component={PublicBlogs}/>
          </Switch>
          </div>
        </BrowserRouter>
        </Provider>
      
    );
  }
}

export default App;
