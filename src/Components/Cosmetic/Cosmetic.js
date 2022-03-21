import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = ({name,price,id}) => {
    const addToCart =(id) =>{
        addToDb(id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
    }
    // const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>price: {price}Taka</p>
            <h5>Product Id: {id}</h5>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button> {/*shortcart*/}
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;