import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.inin';
import Loading from '../Shared/Loading/Loading'

const Login = () => {

    const [login, setLogin] = useState(true);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        createUserWithEmailAndPassword,
        signupUser,
        signupLoading,
        signupError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    if (user || googleUser || githubUser || signupUser) {
        navigate(from, { replace: true });
    }

    let errorInfo;
    if (error || signupError || googleError || githubError) {
        errorInfo = '';
        errorInfo = <p className='p-4 rounded bg-red-300'>
            {error?.message} {googleError?.message} {githubError?.message} {signupError?.message}
        </p>
    }

    if (googleLoading || loading || githubLoading || signupLoading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (login) {
            signInWithEmailAndPassword(email, password);
        }
        else {
            const name = e.target.name.value;
            const confirmPassword = e.target.confirmPassword.value;
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(email, password);
            }
            else {
                alert('Password did not match')
            }
        }

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    return (
        <div className='container mx-auto mb-10 p-5'>

            <div className='mx-auto mt-3 max-w-md text-center border-2 p-5 rounded-lg bg-slate-50'>
                <h2 className='text-red-500 text-4xl font-semibold text-center mb-4'>
                    {login ? 'Login' : 'Sign Up'}
                </h2>

                {errorInfo}

                <form onSubmit={handleSubmit}>

                    {
                        login ? '' :
                            <input type="text" name='name' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Full Name' />
                    }

                    <input type="email" name="email" id="email" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Email Address' required />

                    <input type="password" name="password" id="password" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />

                    {
                        login ? '' : <input type="password" name="confirmPassword" id="confirmPassword" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Confirm Password' required />
                    }

                    <button type="submit" className='w-full p-3 rounded-full bg-red-500 hover:bg-red-600 text-white my-3'>
                        {
                            login ? 'Login' : 'Sign Up'
                        }
                    </button>

                </form>

                <p className='mt-3 text-lg'>
                    {login ? "Don't have an account.?" : "Already Have an account.?"}

                    {/* <Link className='text-red-600 ml-1.5' to={'/signup'}>Sign Up</Link> */}

                    <button onClick={() => setLogin(!login)} className='text-red-600 ml-1.5'>
                        {login ? "Sign Up" : "Login"}
                    </button>
                </p>

                <div className='grid grid-cols-7 mb-3 mt-5 items-center'>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
                    <span>OR</span>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
                </div>

                <div>
                    <button onClick={handleGoogleSignIn} className='w-full bg-white flex items-center justify-center mb-3 border-2 my-2 rounded-md h-12'>
                        <span className='mr-1'><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></span>
                        Continue With Google</button>

                    <button onClick={handleGithubSignIn} className='flex items-center justify-center w-full bg-zinc-800 my-2 text-white rounded-md h-12 '>
                        <span className='mr-1'>
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                        </span>
                        Continue With Github</button>
                </div>

            </div>
        </div>
    );
};

export default Login;