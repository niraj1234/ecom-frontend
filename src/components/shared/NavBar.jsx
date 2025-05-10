import React from 'react';

import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';


const NavBar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { cart } = useSelector( (state) => state.carts );
    const { user } = useSelector( (state) => state.auth );
    
    return (
        <div className={`h-[70px] bg-custom-gradient text-white z-50 flex items-center sticky top-0 bg-gray-700 `}>
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[Montserrat] bg-gray-500 px-6 py-2 rounded-md">Meri Dukaan</span>
                </Link>

            <ul className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5 bg-cyan-900 " : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient   text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/" ? "text-white font-semibold" : "text-gray-200"
                   }`}
                    to="/">
                        Home
                   </Link> 
                </li>

                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/products" ? "text-white font-semibold" : "text-gray-200"
                   }`}
                    to="/products">
                        Products
                   </Link> 
                </li>


                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/about" ? "text-white font-semibold" : "text-gray-200"
                   }`}
                    to="/about">
                        About
                   </Link> 
                </li>

                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/contact" ? "text-white font-semibold" : "text-gray-200"
                   }`}
                    to="/contact">
                        Contact
                   </Link> 
                </li>

                <li className="font-[500] transition-all duration-150">
                   <Link to="/cart" className={`${ path === "/cart" ? "text-white font-semibold" : "text-gray-200" }`}>

                        <div className='flex'>
                            <div className='mt-3'><FaShoppingCart size={25} /></div>
                            <div className='bg-white text-2xl pr-2 pl-1 text-cyan-600 rounded-lg border-4 border-amber-200'>
                                { cart?.length || 0 }
                            </div>
                        </div>


                        {/* <Badge 
                            showZero
                            badgeContent={ cart?.length || 0 }
                            color="secondary"
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}>
                                <FaShoppingCart size={25} />
                        </Badge> */}

                   </Link> 
                </li>


                { ( user && user.id ) 
                    ? (
                       <UserMenu />
                    ) 
                    : 
                    (
                        <li className="font-[500] transition-all duration-150">
                        <Link className="flex items-center space-x-2 px-4 py-[6px]  bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-md shadow-lg 
                                    hover:from-purple-500 hover:to-red-400 transition duration-300 ease-in-out transform "
                            to="/login">
                                <FaSignInAlt />
                                <span>Login</span>
                        </Link> 
                        </li>
                    ) 
                }


            </ul>

            <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="sm:hidden flex items-center sm:mt-0 mt-2">
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl " />
                    ) : (
                        <IoIosMenu className="text-white text-3xl " />
                    )}
            </button>
            </div>
        </div>
    )
}


export default NavBar