import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import validation from './reg-fields.valid';


export default class RegistrationField extends Component  {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.lastnameChange = this.lastnameChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmPassChange = this.confirmPassChange.bind(this);
        this.avatarChange = this.avatarChange.bind(this);
        this.validResult = this.validResult.bind(this);
    }

    state = {
        name: '',
        login: '',
        lastname: '',
        birthDate: '',
        age: '',
        email: '',
        password: '',
        confPass: '',
        avatar: '',

        fieldWarns : [
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        textWarns : [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ]
    }

    componentDidUpdate() {
       validation(this.state, this.validResult);
    }

    validResult(fields,text) {
        this.setState({
            fieldWarns: fields,
            textWarns : text
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({
            password: '',
            confPass: ''
        })

    }

    nameChange(e) {
        this.setState({
           name: e.target.value
        })
    }

   loginChange(e) {
        this.setState({
           login: e.target.value
        })
    }

    lastnameChange(e) {
        this.setState({
            lastname: e.target.value
         })
    }

    dateChange(e) {
        this.setState({
            birthDate: e.target.value
         })
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
         })
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
         })
    }

    confirmPassChange(e) {
        this.setState({
            confPass: e.target.value
         })
    }


    avatarChange(e) {
        this.setState({
            avatar: e.target.value
         })
    }

    render() {
        return (
            <div className='reg'>
                <h2 className='reg__header'>Registration!</h2>
                <form className='reg__form' onSubmit={this.onSubmit} >
                <p className='descr'> * - is required for filling!</p>

                    <label className='reg__field'>Login<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[1]}`}
                            type='text' 
                            onChange={this.loginChange} 
                            value={this.state.login} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[1]}`}>It must contain only latin letters!</p>
                    </label>

                    <label className='reg__field' >Password<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[5]}`}
                            type='password' 
                            onChange={this.passwordChange} 
                            value={this.state.password} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[5]}`}>It must contain from 6 till 18 latin letters or\and numbers!</p>
                    </label>

                    <label className='reg__field'>Confirm password<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[6]}`}
                            type='password' 
                            onChange={this.confirmPassChange} 
                            value={this.state.confPass} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[6]}`}>It must be equal to 'Password'!</p>
                    </label>

                    <label className='reg__field'>Name<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[0]}`}
                            type='text' 
                            onChange={this.nameChange} 
                            value={this.state.name} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[0]}`}>It must contain only latin and cirillyc!</p>
                    </label>

                    <label className='reg__field'>Lastname<span> * </span>: <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[2]}`}
                            type='text' 
                            onChange={this.lastnameChange} 
                            value={this.state.lastname} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[2]}`}>It must contain only latin and cirillyc!!</p>
                    </label>

                    <label className='reg__field'>Date of birth<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[3]}`}
                            type='date' 
                            onChange={this.dateChange} 
                            value={this.state.birthDate} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[3]}`}>It must contain ...!</p>
                    </label>

                    <label className='reg__field'>E-mail<span> * </span>:  <br/>
                        <input 
                            required
                            className={`field ${this.state.fieldWarns[4]}`}
                            type='email' 
                            onChange={this.emailChange} 
                            value={this.state.email} 
                            placeholder='' 
                        />
                        <p className={`good ${this.state.textWarns[4]}`}>It must contain ...!</p>
                    </label>

                    <label className='reg__field'>Avatar:  <br/>
                        <input 
                            type='file' 
                            onChange={this.avatarChange} 
                            value={this.state.avatar} 
                            placeholder='' 
                        />
                    </label>

                    <div className='regbtn__container'>
                        <input type='submit' to='/reg' className='reg__submit__btn' value='Submit'/>
                        <Link className='cancel' to='/'>Cancel</Link> 
                    </div>
                </form>
            </div>
        )
    }
}