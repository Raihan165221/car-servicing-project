import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>This is service detail: {serviceId}</h1>
            <Link to='/checkout'>
                <Button>Check Out</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;