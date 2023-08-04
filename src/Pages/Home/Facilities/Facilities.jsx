//import React from 'react';


import { FaShippingFast,FaMoneyCheckAlt,FaGift} from 'react-icons/fa';
import { FcCustomerSupport } from "react-icons/fc";

const Facilities = () => {
    return (
        <div className="mb-4">
            <h1 className="text-4xl font-bold text-center py-8">What We Provide Facilities!!</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mx-10 md:mx-10 '>
                <div className='bg-gray-200  card hover:bg-gradient-to-r from-pink-400 to-base-300 border-4 border-pink-400 h-full w-3/4 rounded-xl '>
                   <FaShippingFast className='h-20 w-11 ml-24'/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Free Shipping</h1>
                   <p className='text-sm font-medium px-12 pb-3'>We have free shipping facilities in our Disney store.</p>
                </div>
                <div className='bg-gray-200 hover:bg-gradient-to-r from-pink-400 to-base-300  border-4 border-pink-400 h-full w-3/4 rounded-xl  '>
                   <FcCustomerSupport className='h-20 w-11  ml-24'/>
                   <h1 className='font-bold text-2xl text-center pb-2'>24/7 Support</h1>
                   <p className='text-sm font-medium px-12 pb-3'>We provide 24/7 online support to our customer.</p>
  
                </div>
                <div className='bg-gray-200 hover:bg-gradient-to-r from-pink-400 to-base-300 border-4 border-pink-400 h-full w-3/4 rounded-xl  '>
                   <FaMoneyCheckAlt className='h-20 w-11 ml-24'/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Money Return</h1>
                   <p className='text-sm font-medium px-12 pb-3'>We have money return policy.</p>
                </div>
                <div className='bg-gray-200 hover:bg-gradient-to-r from-pink-400 to-base-300 border-4 border-pink-400 h-full w-3/4 rounded-xl  '>
                   <FaGift className='h-20 w-11 ml-24'/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Gift Voucher</h1>
                   <p className='text-sm font-medium px-12 pb-3'>We have money return policy.</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;