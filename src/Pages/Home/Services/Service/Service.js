import React from 'react';

const Service = ({ service }) => {
    const { name, photo, price, description } = service;
    return (
        <div className='border-2 shadow-lg p-2 rounded-lg'>
            <img className='w-full rounded' src={photo} alt="" />
            <div className='px-2'>
                <h3 className='text-2xl my-3'>{name}</h3>
                <p className='text-gray-700 leading-7'>{description}</p>
                <h3 className='text-xl mt-3'>Price:  <small className='text-sm'>tk</small><span className='text-orange-700 font-semibold'>{price}</span></h3>
            </div>
        </div>
    );
};

export default Service;