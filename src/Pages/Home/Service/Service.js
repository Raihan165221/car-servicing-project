import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, price, description, img, id } = service;
    const navigate = useNavigate();
    const handleServiceId = id => {
        navigate(`service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>

            <p>{description}</p>
            <h2>${price}</h2>
            <button onClick={() => handleServiceId(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;