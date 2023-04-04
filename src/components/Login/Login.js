import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>login</h1>
            <form>
                <input type='Name' placeholder='Name' />
                <input type='email' placeholder='E-mail' />
            </form>
        </div>
    );
};

export default Login;