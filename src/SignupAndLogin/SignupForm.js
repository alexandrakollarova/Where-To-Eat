import React, { Component } from 'react';
import AppContext from '../AppContext';
import ValidationError from './ValidationError';
import './SignupForm.css';
import AuthApiService from '../services/auth-api-service';

const strongRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

class SignupForm extends Component {
    static contextType = AppContext;

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    
    state = {
        username: {
            value: "",
            touched: false
        },
        password: {
            value: "",
            touched: false
        },
        repeatPassword: {
            value: "",
            touched: false
        },
        error: null
    }

    updateUsername(username) {
        this.setState({ username: { value: username, touched: true } });
    }
   
    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } });
    }
    
    updateRepeatPassword(repeatPassword) {
        this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { username, password, repeatPassword } = this.state;   
     
        AuthApiService.postUser({
            user_name: username.value,
            user_password: password.value,
        })
        .then(user => {
            username = ""
            password = ""
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error  });
        })
    }

    validateUsername() {
        const username = this.state.username.value.trim();
        if (username.length === 0) {
            return "Username is required";
        } else if (username.length < 6) {
            return "Username must be at least 6 characters long";
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return "Password is required";
        } else if (password.length < 6 && password.length > 72) {
            return "Password must be between 6 and 72 characters long";
        } else if (!password.match(strongRegex)) {
            return "Password must contain at least one upper case letter, one number and one special character";
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        if (repeatPassword.length === 0) {
            return "Confirm your password";
        } else if (repeatPassword !== password) {
            return "Passwords do not match";
        }
    }

    render() {
        const handleShowHideModal = this.context.showSignupForm ? "display-block" : "display-none";

        const usernameError = this.validateUsername();
        const passwordError = this.validatePassword();
        const repeatPasswordError = this.validateRepeatPassword();

        return ( 
            <div className="signup-form">
                <form onSubmit={e => this.handleSubmit(e)} className={handleShowHideModal}>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <label htmlFor="username">Username *</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            onChange={e => this.updateUsername(e.target.value)} 
                        />
                        {this.state.username.touched && 
                            <ValidationError message={usernameError} />}

                        <label htmlFor="password">Password *</label>
                        <input
                            type="text" 
                            name='password' 
                            id="password" 
                            onChange={e => this.updatePassword(e.target.value)}
                        />
                        {this.state.password.touched && 
                            <ValidationError message={passwordError} />}

                        <label htmlFor="repeat-password">Confirm Password *</label>
                        <input 
                            type="text"
                            name="repeat-password" 
                            id="repeat-password" 
                            onChange={e => this.updateRepeatPassword(e.target.value)}
                        />
                        {this.state.repeatPassword.touched && 
                            <ValidationError message={repeatPasswordError} />}

                        <div className='btn-signup-form-wrapper1'>
                            <button 
                                type="submit"
                                className="btn-signup-form"
                                disabled={this.validateUsername() || 
                                    this.validatePassword() || 
                                    this.validateRepeatPassword()
                                }
                            >
                                Done!
                            </button>
                        </div>

                        <div className='btn-signup-form-wrapper2'>
                            <button 
                                type="reset" 
                                className="btn-signup-form"
                                onClick={this.context.hideModalForSignupForm}
                            >
                                Maybe later
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }    
}
 
export default SignupForm;