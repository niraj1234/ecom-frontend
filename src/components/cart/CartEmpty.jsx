import React from 'react'
import { MdAccessibleForward, MdAddBusiness, MdArrowBack, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div>
        <div className='flex items-center flex-col mt-30'>
            <MdShoppingBasket  size={200} className='mt-2 text-amber-700'/>
        </div>
        <div className='flex items-center flex-col bg-neutral-50 p-5 mb-20 text-4xl text-cyan-900 border-b-neutral-200 font-bold'>
            Your Cart is empty !
        </div>
        <div className="mt-6">
            <Link  to="/"
                className="flex gap-2 items-center flex-col text-gray-600 hover:text-yellow-600 transition">
                    <MdAddBusiness size={50} />
                    <span className="font-semibold text-2xl">Start Shopping</span>
                </Link>
        </div>
    </div>
  )
};

export default CartEmpty;