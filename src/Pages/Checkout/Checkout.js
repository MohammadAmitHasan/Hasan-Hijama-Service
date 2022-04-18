import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.inin';

const Checkout = ({ services }) => {

    window.scrollTo(0, 0);
    const { serviceId } = useParams();

    const [success, setSuccess] = useState(false);

    const selectedService = JSON.parse(localStorage.getItem('selectedService'));
    const { id, name, photo, price, description } = selectedService;

    const [user] = useAuthState(auth);
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Booking Confirmed')
        setSuccess(true);
    }

    return (
        <div className='p-5 my-5 container mx-auto'>
            {
                success && <div className='bg-green-600 rounded-lg text-2xl text-center text-white py-2'>
                    Booking Confirmed. Thanks for your booking.
                </div>
            }
            {

                +serviceId === id &&
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                    <div>
                        <div className='mx-auto mt-3 w-full text-center border-2 p-5 rounded-lg bg-slate-50'>
                            <h2 className='text-red-500 text-3xl font-semibold text-center mb-4'>Information Form</h2>

                            <form onSubmit={handleSubmit}>
                                <input type="text" name='name' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' readOnly value={user.displayName} />

                                <input className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' type="email" name="email" id="email" placeholder='Contact Email' />

                                <input type="text" name='address' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Address' required />

                                <input type="text" name='phoneNumber' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Contact Number' required />

                                <button className='w-full p-3 rounded-full bg-red-500 hover:bg-red-600 text-white my-3' type="submit">Confirm Booking</button>
                            </form>
                        </div>
                    </div>

                    <div className='mx-auto mt-3 max-w-md border-2 p-5 rounded-lg bg-slate-50'>
                        <h2 className='text-red-500 text-3xl font-semibold text-center mb-4'>Selected Service</h2>
                        <img className='rounded' src={photo} alt="" />
                        <div className='mb-5'>
                            <h3 className='text-2xl my-3'>{name}</h3>
                            <h3 className='text-xl mb-3'>Price:  <span className='text-orange-700 font-semibold'>{price}<small className='text-sm'> tk</small></span></h3>
                            <p className='text-gray-700 leading-7'>{description}</p>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            }


        </div>
    );
};

export default Checkout;