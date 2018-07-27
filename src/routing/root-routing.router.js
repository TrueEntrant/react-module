import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import UserPage from '../containers/user.container';
import LoginPage from '../containers/login.container';
import RegistrPage from '../containers/registration.container';

function RootRouter() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/login' component={LoginPage}/>
            <Route path='/profile/:id' component={UserPage}/>
            <Route path='/reg' component={RegistrPage}/>
            <Redirect from='/' to='/login/'/>
          </Switch>
        </div>
      </BrowserRouter>
    )
}


export default RootRouter;
