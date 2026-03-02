import React from 'react';
import { useState } from 'react';

const Bottle = ({ bottle, handleAddToCart }) => {

    const [addToCart, setAddToCart]= useState(false)

    // console.log(bottle);
    const { img, name, category, ratings, quantity, seller, shipping, stock, id } = bottle;
    

    const handleAddtoCartProduct = () => {

        console.log('he');
        setAddToCart(!addToCart);
        handleAddToCart(bottle) 

    }
    
    return (
        <div>
            <div className=' mx-5 box-border  md:mx-0 rounded-lg shadow-xl'>
                <div className='rounded-t-lg'>
                    <img className='rounded-t-lg' src={img} alt="" />
                </div>
                <div className='text-left p-5'>
                    <div className='my-2'>
                        <span className={`bg-blue-200 px-3 py-1 font-medium rounded-md ${stock < 0 ? 'text-red-500 bg-red-100' : 'hover:text-white hover:bg-green-600'}`}>{stock > 0 ? 'Availabel in Stock' : 'Not availabel'}</span>
                    </div>
                    <h1 className='h-6 overflow-auto'>Name: <span className=' font-semibold   '>{ name}</span></h1>
                    <h1>Manufacturar: <span>{ seller}</span></h1>
                    <h1>Category: <span>{ category}</span></h1>
                    <h1>Stock: <span>{stock}</span> </h1>
                    <div className='my-2 text-right flex items-center justify-around'>
                        {/* add to cart Button */}
                        <button onClick={handleAddtoCartProduct} className={`bg-violet-500 text-white px-5  py-1 rounded-md cursor-pointer`}>Add to Cart</button>
                        {/* Buy now button */}
                        {/* <button onClick={() => handleAddToCart(bottle)} className={`bg-rose-400 text-white ${addToCart?'px-3':'px-5'}  py-1 rounded-md cursor-pointer`}>Buy Now</button> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bottle;