import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics,setCosmetics] =useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    const total = getTotal(cosmetics)
    return (
        <div>
            <h1>Hello ! Welcome to my cosmetic store</h1>
            <p>Money Needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic name={cosmetic.name} price={cosmetic.price} key={cosmetic._id} id={cosmetic._id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;