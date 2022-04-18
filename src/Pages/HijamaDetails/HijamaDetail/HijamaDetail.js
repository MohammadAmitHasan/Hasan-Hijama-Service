import React from 'react';

const HijamaDetail = ({ hijamaDetail }) => {
    const { title, description } = hijamaDetail;
    return (
        <div className='p-5 border-2 shadow-lg hover:border-red-200 duration-200 ease-in hover:shadow-2xl rounded-lg hover:bg-slate-100'>
            <h4 className='text-2xl text-red-500 mb-3'>{title}</h4>
            <p className='text-gray-700 leading-7'>
                {description}
            </p>
        </div>
    );
};

export default HijamaDetail;