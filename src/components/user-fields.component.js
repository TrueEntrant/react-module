import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/standart.png';
import logo from '../img/log.png'

export default function UserFields (props) {
    const avatar = props.current.avatar || logo;
    return (


        <div className='user'> 

            <h2 className='user__header'>{`User Profile`}</h2>
            <div className='user__data'>

                <div className='user__aside'>
                    <img className='logo' src={avatar} alt='logo' />
                    <p>UA comunity</p>
                    <img className='user__avatar' src={img} alt='avatar'/>
                    <p className='user__avatar__name'>{`${props.current.name} ${props.current.lastname}`}</p>
                    <Link to='/' onClick={props.onLogout} className='logout__btn' title='Logout!'>Logout</Link>

                </div>


                <div className='user__description'>

                    <table className='user__list'>
                        <tbody>
                        <tr>
                            <td>Login:</td>
                            <td>{props.current.login}</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{props.current.name}</td>
                        </tr>
                        <tr>
                            <td>Lastname:</td>
                            <td> {props.current.lastname}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{`${props.current.age} years`}</td>
                        </tr>
                        <tr>
                            <td>Birthday:</td>
                            <td>{props.current.birthDate}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{props.current.email}</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    ) 
}






