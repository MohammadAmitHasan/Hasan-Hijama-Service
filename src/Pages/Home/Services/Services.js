import React from 'react';
import useServices from '../../../CustomHooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useServices();
    console.log(services);
    return (
        <div className='container mx-auto mt-10 p-5'>
            <h2 className='text-red-500 text-4xl font-semibold text-center'>My Services</h2>
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;