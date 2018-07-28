import React, { Component } from 'react';
import UserFields from '../components/user-fields.component'
// import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class UserPage extends Component {
    constructor(props) {
        super(props);

        this.sheat = "sheat";
    }

    render() {
        return(
            <UserFields current={this.props.current}/>
        )
    }
};



function mapStateToProps(state) {
    return {
        current: state.usersData.current
    }
}

export default connect(mapStateToProps)(UserPage);