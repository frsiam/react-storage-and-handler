import React from 'react';
import { add } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 34;
    const total = add(first,second)
    return (
        <div>
            <h1>hello</h1>
            <h4>Our total: {total}</h4>
        </div>
    );
};

export default Cosmetics;