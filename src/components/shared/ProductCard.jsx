import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';
import truncateText from '../../utils/truncateText';

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice, }) => {
    
    const [openProductViewModal ,setOpenProductViewModal ] =  useState(false);
    const btnLoader = false;
    const [selectedViewProduct , setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0 ;

    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    }



    return (
    <div className=' border-b-2 border-b-neutral-800 bg-[#FDFDFD]  rounded-sm shadow-lg overflow-hidden transition-shadow duration-300'>
        <div onClick={() => {
            handleProductView({
                id : productId,
                productName,
                image,
                description,
                quantity,
                price,
                discount,
                specialPrice,
            })
        }} className='w-full overflow-hidden aspect-[4/2]' >
            <img src={image} alt={productName} className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-120' />
        </div>
        <div className='p-4'>
            <h2 onClick={()=>{
                () => {
                    handleProductView({
                        id : productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                    })
                }
            }} 
            className='text-2xl font-bold mb-2 cursor-pointer text-pink-700'>{truncateText(productName , 23)}</h2>

            <div className="min-h-15 max-h-15">
                <p className="text-gray-800 text-sm">{truncateText(description , 75)}</p>
            </div>

            <div  className='flex items-center justify-between p-1 border-t-1 border-amber-300'>
                    { specialPrice ? (                
                            <div className="flex flex-col">
                                <span className="text-gray-600 line-through">
                                    ${Number(price).toFixed(2)}
                                </span>
                                <span className="text-2xl font-bold text-cyan-800">
                                    ${Number(specialPrice).toFixed(2)}
                                </span>
                            </div>
                    ) : (
                        <div className="flex flex-col">
                        <span className="text-gray-600 line-through">
                            {"---"}
                        </span>
                        <span className="text-2xl font-bold text-cyan-800">
                            ${Number(price).toFixed(2)}
                        </span>
                    </div>
                    )}
                    <button disabled={ !isAvailable || btnLoader }
                        onClick={()=>{}} 
                        className={` ${isAvailable ? "opacity-100 bg-lime-700 hover:bg-lime-900" : " bg-gray-500"}
                        text-white py-[6px] mt-[12px] ml-1 px-1 text-[18px] font-semibold rounded-md items-center transition-colors duration-300 w-42 flex justify-center`}>
                            <FaShoppingCart className='mr-2' />
                            {isAvailable ? "Add to cart" : "Out of stock"}
                    </button>
            </div>

        </div>

        <ProductViewModal 
            open={openProductViewModal} 
            setOpen={setOpenProductViewModal}
            product={selectedViewProduct}
            isAvailable={isAvailable} 
            />

    </div>
    )
}

export default ProductCard