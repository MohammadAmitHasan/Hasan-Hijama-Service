import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const signupHandle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {

        }
        else {
            alert('Password did not match')
        }
    }
    return (
        <div className='container mx-auto mb-10'>

            <div className='mx-auto mt-3 max-w-md text-center border-2 p-5 rounded-lg bg-slate-50'>
                <h2 className='text-red-500 text-4xl font-semibold text-center mb-5'>Sign Up</h2>

                <form onSubmit={signupHandle}>
                    <input type="text" name='name' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Full Name' required />

                    <input type="email" name="email" id="email" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Email Address' required />

                    <input type="password" name="password" id="password" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />

                    <input type="password" name="confirmPassword" id="confirmPassword" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Confirm Password' required />

                    <button type="submit" className='w-full p-3 rounded-full bg-red-500 hover:bg-red-600 text-yellow-100 my-3'>Sign Up</button>

                    <p className='mt-3'>Already have an account.?
                        <Link className='text-red-600 ml-1.5' to={'/login'}>Login</Link>
                    </p>
                </form>

                <div className='grid grid-cols-7 mb-3 mt-5 items-center'>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
                    <span>OR</span>
                    <div className='bg-gray-900 h-0.5 col-span-3'></div>
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

            </div>
        </div>
    );
};

export default SignUp;