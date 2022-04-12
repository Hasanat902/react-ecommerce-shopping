import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='login-container'>
            <form onSubmit={handleUserSignIn}>
                <h2 className='login-title'>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <p style={{color: 'red'}}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <input className='form-submit' type="submit" value="LogIn" />
            </form>
            <p>
                New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link>
            </p>
            
        </div>
    );
};

export default Login;