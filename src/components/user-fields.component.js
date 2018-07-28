import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/standart.png';
import logo from '../img/logo.png'

export default function UserFields (props) {

    return (


        <div className='user'> 

            <h2 className='user__header'>{`${props.current.name} ${props.current.lastname}`}</h2>
            <div className='user__data'>

                <div className='user__aside'>
                    <img className='logo' src={logo} alt='logo' />
                    <p>UA comunity</p>
                    <img className='user__avatar' src={img} alt='avatar'/>
                    <Link to='/' className='logout__btn' title='Logout!'></Link>

                </div>


                <div className='user__description'>
                    <p className='user__title'>About:</p>

                    <ul className='user__list'>
                        <li>Login:</li>
                        <li>Name:</li>
                        <li>Lastname:</li>
                        <li>Age:</li>
                        <li>Birthday:</li>
                        <li>E-mail:</li>
                        

                        <li> {props.current.login}</li>
                        <li> {props.current.name}</li>
                        <li> {props.current.lastname}</li>
                        <li> {props.current.age}</li>
                        <li> {props.current.date}</li>
                        <li> {props.current.email}</li>
                    </ul>


                </div>
            </div>
        </div>
    ) 
}






