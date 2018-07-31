import React, { Component } from 'react';
import UserFields from '../components/user-fields.component'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as loginAction from '../action/login.action';
import {Link} from 'react-router-dom';




class UserPage extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.setCurrentUser({});
    }

    render() {
        return(
            
            this.props.current.login ?
            <UserFields onLogout={this.logout} current={this.props.current}/>
            : <div className='user'>
                <h2 className='warn'>You need to login first!</h2>
                <div className='warn-cont'>
                    <Link to='/' className='warn-btn'>Back to login page</Link>
                </div>
              </div>
            
        )
    }
};



function mapStateToProps(state) {
    return {
        current: state.usersData.current
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCurrentUser: bindActionCreators(loginAction.Actions.currentUserSet, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);