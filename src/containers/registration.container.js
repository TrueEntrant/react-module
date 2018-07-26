import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class RegistrPage extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return(
          <div>
            <div className='user'>Registration!</div>
            <Link to='/profile/user1'>Registr!</Link>
            <Link to='/login'>Cancel!</Link>
          </div>
        )
    }
}