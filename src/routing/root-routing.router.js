import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserPage from '../containers/user.container';
import LoginPage from '../containers/login.container';
import RegistrPage from '../containers/registration.container';

function RootRouter() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/profile/*' component={UserPage}/>
            <Route exact path='/reg' component={RegistrPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
}


export default RootRouter;
