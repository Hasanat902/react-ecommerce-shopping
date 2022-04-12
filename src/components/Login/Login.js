import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <form>
                <h2 className='login-title'>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="" required />
                </div>
                <input className='form-submit' type="submit" value="LogIn" />
            </form>
            <p>
                New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link>
            </p>
            
        </div>
    );
};

export default Login;