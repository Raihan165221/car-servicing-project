import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('send email');
    }


    return (
        <div className='mt-5 w-75 mx-auto'>
            <h1 className='form-title'>Please Log In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='mt-2'>{errorMessage}</p>
            <p className='mt-2'>New to Genius Car Mekar? <Link className='text-decoration-none text-primary' to='/register'>Please Register</Link></p>
            <p className='mt-2'>Forget Password? <Link className='text-decoration-none text-primary' onClick={resetPassword} to='/register' >Reset Password</Link></p>
            <SocialLogIn />
        </div>
    );
};

export default Login;