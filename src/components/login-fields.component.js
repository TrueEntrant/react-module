import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class LoginFields extends Component {
    constructor(props) {
        super(props);

        this.passChange = this.passChange.bind(this);
        this.logChange = this.logChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        password: '',
        login: '',
        isMatch: 'login-right',
        badHigthlights: null
    }

    componentDidUpdate() {
        if(this.props.match === false) {
            if(this.state.badHigthlights === null && this.state.isMatch === 'login-right') {
                this.setState({
                    isMatch: 'login-wrong',
                    badHigthlights: 'login-bad'
                })
            }
        } else if(this.props.match === true) {
            if(this.state.badHigthlights === 'login-bad' && this.state.isMatch === 'login-wrong') {
                this.setState({
                    isMatch: 'login-right',
                    badHigthlights: null
                })
            }
        }
    }

    passChange(evt) {
        evt.preventDefault();
        this.setState({
            password: evt.target.value
        })
    }
    
    logChange(evt) {
        evt.preventDefault();
        this.setState({
            login: evt.target.value
        })
    }

    submit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            password: '',
        })
    }

    render() {
        return (
            <form className='login__form' onSubmit={this.submit}>
                <h2 className='login__header'>SIGN IN!</h2>
                <p className={this.state.isMatch}>Invalid Login or/and Password </p>
                <input 
                    type='text' 
                    className={`${this.state.badHigthlights} login__input`} 
                    value={this.state.login} 
                    onChange={this.logChange}
                    placeholder='Login:'
                />
                <input 
                    type='password' 
                    className={`${this.state.badHigthlights} login__input`} 
                    value={this.state.password} 
                    onChange={this.passChange}
                    placeholder='Password:'
                />
                <input 
                    type='submit' 
                    className='login__btn'
                    value='Login'
                />
                <p className='login__regtext'>Dont have an Account? <Link className='' to='/reg'>Reg now!</Link></p>
            </form>
        )
    }
    
}


export default LoginFields;