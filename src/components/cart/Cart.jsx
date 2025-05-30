import React from 'react';
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch, useSelector } from 'react-redux';
import ItemContent from './ItemContent';
import CartEmpty from './CartEmpty';



const Cart = () => {

  const dispatch = useDispatch();
  const { cart } = useSelector( (state) => state.carts );
  const newCart = { ...cart };

  newCart.totalPrice = cart?.reduce(
    (acc,cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity) , 0
  )


  if(!cart || cart.length === 0){
    return <CartEmpty />
  };

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-10">
    <div className="flex flex-col items-center mb-12">
        <h1 className="text-6xl font-bold text-purple-800 flex items-center gap-3">
          <MdShoppingCart size={60} className="text-amber-500" />
            Your Cart
        </h1>
        <p className="text-lg text-gray-600 mt-2">All your selected items</p>
    </div>

    <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center">
        <div className="md:col-span-2 justify-self-start text-2xl text-slate-800 lg:ps-4">
            Product
        </div>

        <div className="justify-self-center text-2xl text-slate-800">
            Price
        </div>

        <div className="justify-self-center text-2xl text-slate-800">
            Quantity
        </div>

        <div className="justify-self-center text-2xl text-slate-800">
            Total
        </div>
    </div>

    <div>
      {cart && cart.length >0 && cart.map((item,i) => <ItemContent key={i} {...item} />)}
    </div>



    <div className="border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4">
        <div></div>
        <div className="flex text-sm gap-1 flex-col">
            <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                <span className='text-cyan-800 text-2xl mt-2'>Subtotal</span>
                <span className='bg-amber-300  p-2 text-4xl rounded-b-md'>{formatPrice(newCart?.totalPrice)}</span>
            </div>

            <p className="text-slate-500">
                Taxes and shipping calculated at checkout
            </p>

            <Link className="w-full flex justify-end" to="/checkout">
            <button
                onClick={() => {}}
                className="font-semibold w-[300px] py-2 px-4 rounded-sm bg-customBlue text-cyan-700 bg-neutral-100  text-2xl flex items-center justify-center gap-2 hover:bg-cyan-800 hover:text-white transition duration-200">
                <MdShoppingCart size={40} className='mr-2'/>
                Checkout
            </button>
            </Link>

            <Link className="flex gap-2 items-center mt-2 text-slate-500" to="/products">
                <MdArrowBack />
                <span>Continue Shopping</span>
            </Link>
        </div>
    </div>
</div>
);
};

export default Cart;