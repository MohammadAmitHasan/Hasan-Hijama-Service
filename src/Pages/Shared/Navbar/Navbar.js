import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from './CustomLink/CustomLink';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className='flex container items-center mx-auto '>
                <div className='w-72'>
                    <img src={logo} className='h-10 mx-auto' alt="" />
                    <div className='text-center'>
                        <h4 className='text-xl font-semibold'><span className='text-red-500'>Hasan</span> Hijama Services</h4>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`bg-white text-center md:flex items-center w-full justify-end absolute md:static duration-300 ease-in ${open ? 'top-20' : 'top-[-280px]'}`}>
                    <CustomLink to={'/'}>HOME</CustomLink>
                    <CustomLink to={'/hijama'}>Hijama</CustomLink>
                    <CustomLink to={'/blog'}>Blog</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    <CustomLink to={'/blogs'}>Login</CustomLink>
                    <CustomLink to={'/about'}>Sign Up</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;