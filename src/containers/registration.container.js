import React, { Component } from 'react';
import RegistrationField from './../components/reg-fields.component';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as loginAction from '../action/login.action';
import * as registration from '../action/registration'

 class RegistrPage extends Component {
    constructor(props) {
        super(props);

        this.regSubmit = this.regSubmit.bind(this);
    }

    regSubmit(user) {
      user.id = this.props.users.length;
      delete user.fieldWarns;
      delete user.textWarns;
      delete user.confPass;
      
      let res = new Date() - new Date(user.birthDate);
      user.age = Math.floor(res/ (24 * 3600 * 365.25 * 1000));

      const birth = user.birthDate.split('-');
      user.birthDate = birth.reverse().join('.');

      this.props.setCurrentUser(user);
      this.props.addNewtUser(user);
      this.props.history.replace(`/profile/${user.id}`);
    }

    render() {
        return(
          <RegistrationField onSubmit={this.regSubmit} />
        )
    }
}

function mapStateToProps(state) {
  return {
      users: state.usersData.users,
      current: state.usersData.current
  }
}

function mapDispatchToProps(dispatch) {
  return {
      setCurrentUser: bindActionCreators(loginAction.Actions.currentUserSet, dispatch),
      addNewtUser: bindActionCreators(registration.Actions.newUserAdd, dispatch),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegistrPage);