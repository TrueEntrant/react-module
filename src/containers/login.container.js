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
        if(inputs.log === '123') {
            this.props.compareResChange(true);
           
        }
        else this.props.compareResChange(false);
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
        match: state.usersData.match
    }
}

function mapDispatchToProps(dispatch) {
    return {
        compareResChange: bindActionCreators(loginAction.Actions.compareResChange, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);