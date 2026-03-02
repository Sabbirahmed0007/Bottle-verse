import React from 'react';

const Cart = ({ cartProduct, handleRemoveCartFromLocalStorage }) => {
    const {id, img, stock, name, seller, category } = cartProduct;
    
    return (
        <div>
            <div className='  box-border  mx-auto  md:mx-0 rounded-lg shadow-xl  w-72  '>
                <div className='rounded-lg'>
                    <img className='rounded-lg  ' src={img} alt="" />
                </div>
                <div className='text-left p-5'>
                    <div className='my-2'>
                        <span className={`bg-blue-200 px-3 py-1 font-medium rounded-md ${stock < 0 ? 'text-red-500 bg-red-100' : 'hover:text-white hover:bg-green-600'}`}>{stock > 0 ? 'Availabel in Stock' : 'Not availabel'}</span>
                    </div>
                    <h1 className='h-6 overflow-auto'>Name: <span className=' font-semibold   '>{name}</span></h1>
                    <h1>Manufacturar: <span>{seller}</span></h1>
                    <h1>Category: <span>{category}</span></h1>
                    <h1>Stock: <span>{stock}</span> </h1>

                    <button onClick={()=>handleRemoveCartFromLocalStorage(id)} className='bg-red-500 hover:bg-red-600 px-8 py-1 rounded-lg text-white my-4 md:my-10'>X</button>
                    
                </div>

            </div>
        </div>
    );
};

export default Cart;