import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        navigate('/');
    }
    const handleGoogle = () => {
        signInWithGoogle();
    }

    const handleGitHub = () => {
        signInWithGithub();
    }
    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', border: '1px solid gray' }} className='w-50 me-2'></div>
                <div>or</div>
                <div style={{ height: '1px', border: '1px solid gray' }} className='w-50 ms-2'></div>
            </div>
            <div>
                <p>{errorMessage}</p>
                <Button onClick={handleGoogle} className='w-100 my-2 text-light' variant='info'>SignIn With Google</Button>
                <Button className='w-100 my-2 text-light' variant='info'>SignIn With Facebook</Button>
                <Button onClick={handleGitHub} className='w-100 my-2 text-light' variant='info'>SignIn With GitHub</Button>
            </div>
        </div>
    );
};

export default SocialLogIn;