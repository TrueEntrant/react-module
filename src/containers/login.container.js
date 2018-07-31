import React, { Component } from 'react';
import {connect} from "react-redux";
import LoginFields from '../components/login-fields.component'
import {bindActionCreators} from "redux";
import * as loginAction from '../action/login.action';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.compareLoginInputs = this.compareLoginInputs.bind(this);
    }


    compareLoginInputs(inputs) {
        this.props.compareResChange(

            this.props.users.some( user => {
                if(user.login === inputs.login) {
                    if(user.password === inputs.password) {
                        this.props.setCurrentUser(user);                    
                        this.props.history.push(`/profile/${user.id}`);
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            })
        )
    }
   
    render() {
        return (
            <div className='login'>
                
                <LoginFields 
                    match={this.props.match}
                    onSubmit={this.compareLoginInputs} />
                               
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        users: state.usersData.users,
        match: state.usersData.match,
        current: state.usersData.current
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentUser: bindActionCreators(loginAction.Actions.currentUserSet, dispatch),
        compareResChange: bindActionCreators(loginAction.Actions.compareResChange, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);