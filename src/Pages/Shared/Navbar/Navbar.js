import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from './CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.inin';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const [open, setOpen] = useState(false);
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className='flex container items-center mx-auto '>
                <div className='w-72'>
                    <img src={logo} className='h-10 mx-auto mt-0.5' alt="" />
                    <div className='text-center'>
                        <h4 className='text-xl mb-0.5 font-semibold'><span className='text-red-500'>Hasan</span> Hijama Services</h4>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`bg-white text-center md:flex items-center w-full justify-end absolute md:static duration-300 ease-in ${open ? 'top-20' : 'top-[-280px]'}`}>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/hijama'}>Hijama</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    {
                        user ?
                            <button onClick={() => signOut(auth)} className='text-lg text-red-500 font-semibold mx-2 py-1 px-3 border-b-2 border-white hover:border-red-400 hover:bg-red-100 rounded-sm inline-block my-1 md:my-0'>Logout</button>
                            :
                            <CustomLink to={'/login'}>Login</CustomLink>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;