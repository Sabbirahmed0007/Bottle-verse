import React from 'react';
import { use } from 'react';
import Bottle from './Bottle';

const Bottles = ({ bottlesPromise }) => {

    const bottles = use(bottlesPromise);
    // console.log(bottles);
    

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5' >

               {bottles.map(bottle=> <Bottle bottle={bottle}></Bottle>)}
            </div>
            
        </div>
    );
};

export default Bottles;