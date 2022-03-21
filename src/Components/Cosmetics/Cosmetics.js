import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics,setCosmetics] =useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            {
                cosmetics.map(cosmetic => <Cosmetic name={cosmetic.name} price={cosmetic.price} key={cosmetic._id} id={cosmetic._id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;