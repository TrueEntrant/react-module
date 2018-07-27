import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class LoginFields extends Component {
    constructor(props) {
        super(props);
        this.isMatch = this.props.match ? 'login-right' : 'login-wrong';
        this.badHigthlights = this.props.match ? null : 'login-bad'
        this.passChange = this.passChange.bind(this);
        this.logChange = this.logChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        pass: '',
        log: ''
    }

    componentDidUpdate() {
        console.log(this.isMatch, this.badHigthlights);
        this.isMatch = this.props.match ? 'login-right' : 'login-wrong';
        this.badHigthlights = this.props.match ? null : 'login-bad';
    }

    passChange(evt) {
        evt.preventDefault();
        this.setState({
            pass: evt.target.value
        })
    }
    
    logChange(evt) {
        evt.preventDefault();
        this.setState({
            log: evt.target.value
        })
    }

    submit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            pass: '',
        })
    }

    render() {
        return (
            <form className='login__form' onSubmit={this.submit}>
                <h2 className='login__header'>SIGN IN!</h2>
                <p className={this.isMatch}>Invalid Login or/and Password </p>
                <input 
                    type='text' 
                    className={`${this.badHigthlights} login__input`} 
                    value={this.state.log} 
                    onChange={this.logChange}
                    placeholder='Login:'
                />
                <input 
                    type='password' 
                    className={`${this.badHigthlights} login__input`} 
                    value={this.state.pass} 
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