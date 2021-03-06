import { DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className='p-10 bg-red-100 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 container mx-auto'>
                <div className='lg:col-span-2 flex items-center justify-center md:justify-start'>
                    <div className='w-72'>
                        <img src={logo} className='h-10 mx-auto' alt="" />
                        <div className='pt-1 text-center'>
                            <h4 className='text-xl font-semibold'><span className='text-red-500'>Hasan</span> Hijama Services</h4>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <p className="my-1">
                        <Link to='/hijama'>Know About Hijama</Link>
                    </p>
                    <p className="my-1">
                        <Link to='/about'>Know About Me</Link>
                    </p>
                    <p className="my-1">Terms & Conditions</p>
                    <p className="my-1">Privacy</p>

                </div>
                <div>
                    <h5 className='text-xl'>Contact Me</h5>
                    <p className='my-1 flex'>
                        <MailIcon className='w-6 h-6'></MailIcon>bhamithasan@gmail.com
                    </p>

                    <p className="my-1 flex">
                        <DeviceMobileIcon className='w-6 h-6'></DeviceMobileIcon> 0152133209</p>

                    <p className='my-1 flex'>
                        <img className='h-6 w-6' src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" />0152133209
                    </p>

                    <p className='mt-2 flex'>
                        <a target='_blank' href="https://www.facebook.com/amit.hasan.58152/">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/muhammad-amit-hasan-98743777/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                        </a>

                        <a target='_blank' href="https://github.com/MohammadAmitHasan">
                            <img src="https://img.icons8.com/fluency/48/000000/github.png" />
                        </a>
                    </p>
                </div>
            </div>
            <p className='text-center mt-10'>
                <small>Copyright &copy; {new Date().getFullYear()}, Hasan Hijama Services, All rights reserved</small>
            </p>
        </div>

    );
};

export default Footer;