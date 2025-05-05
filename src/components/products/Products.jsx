import React, { useEffect } from 'react'
import ProductCard from '../shared/ProductCard';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions';
import Filter from './Filter';
import useProductFilter from '../../hooks/useProductFilter';
import Loader from '../shared/Loader';
import Paginations from '../shared/Paginations';


const Products = () => {

    const { isLoading , errorMessage } = useSelector(
        (state) => state.errors
    )
    // const isLoading = false;
    // const errorMessage = '';

    const { products , categories , pagination } = useSelector(
        (state) => state.products 
    ) 

    const dispatch = useDispatch();
    useProductFilter();

    //  Following call will be done by useProductFilter()
    //  This was working for /public/products uri only
    //  Now we need to send keyword too, Backend has one more endpoint for that
    // useEffect(()=> {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    console.log(products)


    useEffect(()=> {
        dispatch(fetchCategories());
    }, [dispatch]);


    // const products = [
    //     {
    //       productId: 652,
    //       productName: "Mahindra Thar Roxx",
    //       image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1731925539/aXR0emR6NHh1MzFzcmhrd3FjM2E=/drilldown",
    //       description: "Experience the latest in mobile technology powerful processing, and an all-day battery.",
    //       quantity: 5,
    //       price: 1450.0,
    //       discount: 10.0,
    //       specialPrice: 1305.0,
    //     },
    //     {
    //         productId: 653,
    //         productName: "Srinidhi Shetty",
    //         image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1740650987/aHo3emw5a2s5emdrcDRtampodGk=/drilldown",
    //         description: "Experience the latest in mobile technology  and an all-day battery.",
    //         quantity: 0,
    //         price: 14522.0,
    //         discount: 10.0,
    //         // specialPrice: 12999.0,
    //     },


    //     {
    //         productId: 654,
    //         productName: "Indian Spices Masale",
    //         image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1740508654/cW5mdnJ5YXV3aHc1aWNzbnphb3I=/drilldown",
    //         description: "Ultra-thin laptop with Apple's M2 chip portable design.",
    //         quantity: 4,
    //         price: 2550.0,
    //         discount: 20.0,
    //         specialPrice: 2040.0,
    //       },
    //       {
    //         productId: 655,
    //         productName: "Titan Sonata Poze ",
    //         image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1740911134/dnR2emltYWRxenFhcmJ5Y2Rjcms=/drilldown",
    //         description: "Great looking watch at cheap price by Tata Sonata.",
    //         quantity: 0,
    //         price: 1100.0,
    //         discount: 10.0,
    //         specialPrice: 985.0,
    //     },    

    //     {
    //         productId: 656,
    //         productName: "Rasha Thadani Kurti Collection",
    //         image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1731925456/c3NnZ2xjMXZsbWpwazdycXV2eHg=/drilldown",
    //         description: "Actress Rasha Thadani showing her Kurti collection.",
    //         quantity: 3,
    //         price: 256.0,
    //         discount: 20.0,
    //         specialPrice: 189.0,
    //       },
    //       {
    //         productId: 657,
    //         productName: "Classical car for sell",
    //         image: "https://res-console.cloudinary.com/dgp9gidsv/thumbnails/v1/image/upload/v1740509058/eHpmY3U4ejE4d25xeXl2ZTVzZ2k=/drilldown",
    //         description: "Great looking watch at cheap price by Tata Sonata.",
    //         quantity: 0,
    //         price: 56225.0,
    //         discount: 10.0,
    //         specialPrice: 52632.0,
    //     }    
    // ];




  return (
    <div className='lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto'>
        <Filter categories = { categories ? categories : []} />

        {isLoading ? (
            <div>
                <Loader text={"Product is loading..."}/>
            </div>

        ) : errorMessage ? (
            <div className='flex justify-center items-center h-[200px]'>
                <FaExclamationTriangle className='text-red-500 text-3xl mr-2'/>
                <span className='text-pink-200 text-lg font-medium'>{errorMessage}</span>
            </div>
        ) : (
           <div className='min-h-[700px]'>
                <div className='pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6'>
                    { products && products.map( (item,idx) => 
                        <ProductCard  key={idx} { ...item } /> 
                    )}
                </div>
            
            <div className='flex justify-center pt-2 pb-2 bg-gray-300 ' >
                <Paginations numberOfPage = {pagination?.totalPages} 
                             totalProducts = {pagination?.totalElements} />
            </div>
           
           </div>
        )}
    </div>
  )
}

export default Products