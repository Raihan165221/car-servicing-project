import React from 'react';
import './Expert.css'
const Expert = ({ expert }) => {
    const { img, name, job } = expert;
    return (
        <div className='expert'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    );
};

export default Expert;