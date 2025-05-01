import React, { useState } from 'react'

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice, }) => {
    
    const [openProductModalView ,setOpenProductModalView ] =  useState(false);
    const btnLoader = 'false';
    const [selectedViewProduct , setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0 ;

    return (
    <div className='border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300'>
        <div onClick={() => {}} className='w-full overflow-hidden aspect-[3/2]' >
            <img src={image} alt={productName} className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105' />
        </div>
        <div className='p-4'>
            <h2 onClick={()=>{}} className='text-2xl font-bold mb-2 cursor-pointer text-pink-700'>{productName}</h2>

            <div className="min-h-20 max-h-20">
                <p className="text-gray-800 text-sm">{description}</p>
            </div>

            <div className="flex flex-col">
                <span className="text-gray-600 line-through">
                    ${Number(price).toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-cyan-800">
                    ${Number(specialPrice).toFixed(2)}
                </span>
            </div>


        </div>

    </div>
    )
}

export default ProductCard