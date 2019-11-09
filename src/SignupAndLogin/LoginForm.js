import React, { Component } from 'react';
import AppContext from '../AppContext';
import './SignupForm.css';
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service';

class LoginForm extends Component {
    static contextType = AppContext;

    static defaultProps = {
        onLoginSuccess: () => {}
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
        error: null
    }

    updateUsername(username) {
        this.setState({ username: { value: username, touched: true } });
    }
   
    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        
        AuthApiService.postLogin({
            user_name: username,
            user_password: password
        })
        .then(res => {
            username = ""
            password = ""
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error });
        })
    }

    render() { 
        const handleShowHideModal = this.context.showLoginForm ? "display-block" : "display-none";

        return ( 
            <div className="signup-form">
                <form onSubmit={e => this.handleSubmit(e)} className={handleShowHideModal}>
                    <fieldset>
                        <legend>Login</legend>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            onChange={e => this.updateUsername(e.target.value)} 
                        />
                       
                        <label htmlFor="password">Password</label>
                        <input
                            type="text" 
                            name='password' 
                            id="password" 
                            onChange={e => this.updatePassword(e.target.value)}
                        />
                    
                        <div className='btn-signup-form-wrapper1'>
                            <button 
                                type="submit"
                                className="btn-signup-form"
                            >
                                Login
                            </button>
                        </div>

                        <div className='btn-signup-form-wrapper2'>
                            <button 
                                type="reset" 
                                className="btn-signup-form"
                                onClick={this.context.hideModalForLoginForm}
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
 
export default LoginForm;