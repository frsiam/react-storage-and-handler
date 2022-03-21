import React from 'react';
import './Cosmetic.css'

const Cosmetic = ({name,price,id}) => {
    const addToCart =(id) =>{
        console.log('Item added',id)
    }

    const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>price: {price}Taka</p>
            <h5>Product Id: {id}</h5>
            <button onClick={addToCartWithParam}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;