import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, photo, price, description } = service;

    const navigate = useNavigate();
    const handleBooking = id => {
        navigate(`/checkout/${id}`);
        localStorage.setItem('selectedService', JSON.stringify(service));
    }

    return (
        <div className='border-2 shadow hover:shadow-xl hover:border-red-200  ease-in duration-300 rounded-lg relative'>
            <div className='p-2'>
                <img className='w-full rounded' src={photo} alt="" />
                <div className='px-2 mb-16'>
                    <h3 className='text-2xl my-3'>{name}</h3>
                    <p className='text-gray-700 leading-7'>{description}</p>
                    <h3 className='text-xl mt-3'>Price:  <span className='text-orange-700 font-semibold'>{price}<small className='text-sm'> tk</small></span></h3>
                </div>
            </div>
            <div className='w-full text-center absolute bottom-4'>
                <button onClick={() => handleBooking(id)} className='py-2 bg-red-200 hover:bg-red-300 rounded-full w-3/4 mx-auto bottom-2'>Get Booking</button>
            </div>
        </div>
    );
};

export default Service;