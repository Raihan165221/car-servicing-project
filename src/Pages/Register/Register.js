import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogIn from '../Login/SocialLogIn/SocialLogIn';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='w-75 mx-auto'>
            <h1 className='form-title'>Please Register</h1>
            <form onSubmit={handleRegister} className='input-form'>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Type Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ms-2 mt-2 ${!agree ? '' : 'text-primary'}`} htmlFor="terms">Accept Genius Car Mekar Terms & Conditions</label>
                <input disabled={!agree} className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-center mt-2'>Already have an Account? <Link className='text-decoration-none text-primary' to='/login'>Please Log In</Link></p>
            <SocialLogIn />
        </div>
    );
};

export default Register;