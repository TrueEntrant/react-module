import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <div className='user'>Login?</div>
                <Link to='/profile/user1'>Login!</Link>
                <Link to='/reg'>Registr!</Link>
            </div>
        )
    }
}