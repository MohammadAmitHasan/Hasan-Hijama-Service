import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    }

    return (
        <div className='container mx-auto mb-10 p-4'>
            <h2 className='text-red-500 text-4xl font-semibold text-center'>Login</h2>

            <div className='mx-auto mt-3 max-w-md text-center border-2 pt-1 pb-5 px-5 rounded-lg bg-slate-50'>
                <div className='mb-3'>
                    <img src={logo} className='h-20 mx-auto mt-0.5' alt="" />
                    <div className='text-center'>
                        <h4 className='text-xl font-semibold'><span className='text-red-500'>Hasan</span> Hijama Services</h4>
                    </div>
                </div>

                <div>
                    <button className='w-full bg-white flex items-center justify-center mb-3 border-2 my-2 rounded-md h-12'>
                        <span className='mr-1'><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></span>
                        Continue With Google</button>

                    <button className='flex items-center justify-center w-full bg-zinc-800 my-2 text-white rounded-md h-12 '>
                        <span className='mr-1'>
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                        </span>
                        Continue With Github</button>
                </div>

                <div className='grid grid-cols-7 mb-3 mt-5 items-center'>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
                    <span>OR</span>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
                </div>

                <form onSubmit={handleLogin}>
                    <input type="email" name="email" id="email" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Email Address' required />

                    <input type="password" name="password" id="password" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />

                    <button type="submit" className='w-3/4 p-3 rounded-full bg-red-500 hover:bg-red-600 text-white my-3'>Login</button>

                    <p className='mt-3'>Don't have an account.?
                        <Link className='text-red-600 ml-1.5' to={'/signup'}>Sign Up</Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Login;