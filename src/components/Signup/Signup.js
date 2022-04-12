import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css';
import auth from '../../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Given two password did not match');
            return;
        }

        if(password.length < 6){
            setError('Password must be 6 characters');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleCreateUser}>
                <h2 className='login-title'>Sign Up</h2>
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
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <br />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>
                Already have an account? <Link className='form-link' to='/login'>Login</Link>
            </p>
            
        </div>
    );
};

export default Signup;