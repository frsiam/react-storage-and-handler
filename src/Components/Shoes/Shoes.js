import React from 'react';
import { multiply } from '../../Utilities/calculate';

const Shoes = () => {
    const result = multiply(6,11)
    return (
        <div>
            <h2>This is shoe components</h2>
            <h4>The result is : {result}</h4>
        </div>
    );
};

export default Shoes;