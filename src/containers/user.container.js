import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class UserPage extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return(
        <div>
            <div className='user'>USER!</div>
            <Link to='/login'>Logout!</Link>
        </div>
        )
    }
}