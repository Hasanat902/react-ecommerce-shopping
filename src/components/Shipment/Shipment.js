import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        
    }


    return (
        <div className='login-container'>
            <form onSubmit={handleCreateUser}>
                <h2 className='login-title'>Shipping Information</h2>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <br />
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <br />
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add for Shipping" />
            </form>
            
        </div>
    );
};

export default Shipment;