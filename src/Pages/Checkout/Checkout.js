import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            {serviceId}
        </div>
    );
};

export default Checkout;