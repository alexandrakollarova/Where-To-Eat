import React, { Component } from 'react';
import AppContext from '../AppContext';
import './SignupForm.css';

class SignupForm extends Component {
    static contextType = AppContext;

    render() {
        const showHideClassName = this.context.showSignupForm ? "display-block" : "display-none";

        return ( 
            <div className={showHideClassName}>
                <form className='signup-form'>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <label htmlFor='username'>User Name</label>
                        <input name='username' id='username' className='username' />

                        <label htmlFor='email'>Email</label>
                        <input name='email' id='email' className='email' />

                        <label htmlFor='password'>Password</label>
                        <input name='password' id='password' className='password' />

                        <label htmlFor='repeat_password'>Confirm Password</label>
                        <input name='repeat_password' id='repeat_password' className='repeat_password' />

                        <div className='button-wrapper'>
                            <button type="submit">Done!</button>
                        </div>

                        <div className='button-wrapper'>
                            <button type="button" onClick={this.context.handleCancel}>Cancel</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }    
}
 
export default SignupForm;