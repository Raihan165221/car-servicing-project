import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';
const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id='experts' className='mt-5'>
            <h1 className='experts-title py-5'>Our Experts</h1>
            <div className='experts-container'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;