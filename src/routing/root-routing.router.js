import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import UserPage from '../containers/user.container';
import LoginPage from '../containers/login.container';
import RegistrPage from '../containers/registration.container';
import BgSlider from '../components/background.slider';

function RootRouter() {
  return (
      <HashRouter>
        <div className="App">
          <BgSlider />
          <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/profile/*' component={UserPage}/>
            <Route exact path='/reg' component={RegistrPage}/>
          </Switch>
        </div>
      </HashRouter>
    )
}


export default RootRouter;
