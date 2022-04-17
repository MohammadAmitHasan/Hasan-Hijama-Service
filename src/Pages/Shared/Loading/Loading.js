import React, { useState } from 'react';
import { SyncLoader } from 'react-spinners';

const Loading = () => {

    return (
        <div className="sweet-loading h-screen">
            <h2 className='text-4xl font-semibold text-center mt-20 text-red-500'>Page Loading</h2>

            <div className='w-40 h-40 mx-auto flex justify-center items-center'>
                <SyncLoader color='#ef4444'></SyncLoader>
            </div>

        </div>
    );
};

export default Loading;