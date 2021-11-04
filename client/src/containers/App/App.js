import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../Dashboard/Header'
import UserComponent from '../User/User'
import DashboardComponent from '../Dashboard/Dashboard'
import Home from '../Dashboard/Home'
import Family from '../User/Family';
import Member from '../User/Member'
import Group from '../User/Group'

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/user" component={UserComponent} />
          <Route exact path="/user/:email" component={Member} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route exact path="/families" component={Family} />
          <Route exact path="/families/:surname" component={Group} />
          <Route exact path="/" component={Home} />
        </div>
    </BrowserRouter>
  )
};

export default App;