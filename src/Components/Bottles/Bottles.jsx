import React, { useEffect } from 'react';
import { use } from 'react';
import Bottle from './Bottle';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { addToCart, getCarts, removeCart } from '../../Utilities/localStorage';


const Bottles = ({ bottlesPromise }) => {

    const [carts, setCart] = useState([]);
    const bottles = use(bottlesPromise);
    
    // console.log(bottles);



    // useeffect =---------

    useEffect(() => {
        const getCartsIds = getCarts();

        // console.log(getCartsIds);

        const getItemCarts = [];

        for (const id of getCartsIds) {
            console.log(id);

            const cartProduct = bottles.find(bottle => bottle.id === id);

            getItemCarts.push(cartProduct);


            
        }

        setCart(getItemCarts)
        



    },[bottles])



   

    const handleAddToCart = (bottle) => {
        const updateCart = [...carts, bottle];
        setCart(updateCart)


        // Add cart to the local storage

        addToCart(bottle.id) 
        
    }


    const handleRemoveCartFromLocalStorage = (id) => {

        console.log('remove cart', id);
        
        const remainingCart = carts.filter(cartItem => cartItem.id !== id);

        setCart(remainingCart);
        removeCart(id)
         
        
    }

    // console.log(carts);
    
    

    return (
        <div>
            {/* Cart length */}

            {/* cart page */}
            <div className='my-10'>
                <h1 className='text-lg font-bold'>Cart ({carts.length})</h1>
                <div className='flex flex-col  md:flex-row items-center justify-start gap-10 md:w-4/5 mx-auto my-6 overflow-auto'>
                    {carts.map((cart, index) => <Cart cartProduct={cart} handleRemoveCartFromLocalStorage={handleRemoveCartFromLocalStorage} key={index}></Cart>)}
                </div>
               
                
                {/* Bottle page */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5  justify-center items-center w-11/12 mx-auto' >

               {bottles.map(bottle=> <Bottle handleAddToCart={handleAddToCart} bottle={bottle} key={bottle.id}></Bottle>)}
            </div>
            
        </div>
    );
};

export default Bottles;