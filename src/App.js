import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'


function App() {
  return (
   
     <BrowserRouter>
       
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
         
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
         
      </BrowserRouter>
   
  );
}

export default App;
