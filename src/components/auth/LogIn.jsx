import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import InputField from "../shared/InputField";
import Spinners from "../shared/Spinners";




const LogIn = () => {

    const navigate = useNavigate();
    const [ loader, setLoader ] = useState(true);

    const { register , handleSubmit , formState:{errors}, } = useForm({
        mode:"onTouched",
    });


    const loginHandler = async (data) => {
        console.log("Login Check " , data);
    }


    return (
        <div  className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit = { handleSubmit(loginHandler) } 
                    className="sm:w-[550px] w-[460px] shadow-gray-600 py-8 sm:px-8 px-10 bg-neutral-50 border-b-2  border-t-8 border-gray-600 ">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <AiOutlineLogin className="text-slate-800 text-5xl"/>
                        <h1 className="text-cyan-700 text-center font-montserrat lg:text-4xl text-3xl font-bold">
                            Login Here
                        </h1>
                    </div>

            <hr className="mt-2 mb-10 text-gray-300" />
            <div className="flex flex-col gap-3">
                <InputField
                    label="Username"
                    required
                    id="username"
                    type="text"
                    message="*UserName is required"
                    placeholder="Enter your username"
                    register={register}
                    errors={errors}
                    />

                <InputField
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="*Password is required"
                    placeholder="Enter your password"
                    register={register}
                    errors={errors}
                    />
            </div>

            <button
                disabled={loader}
                className=" bg-cyan-800 flex gap-2 items-center justify-center font-semibold text-white text-[1.3rem] w-full py-3 hover:bg-cyan-900 transition-colors duration-100 rounded-sm mt-6"
                type="submit">
                {loader ? (
                    <>
                    <Spinners /> Loading...
                    </>
                ) : (
                    <>Login</>
                )}
            </button>
            
            <p className="text-center text-sm text-slate-700 mt-6">
              Don't have an account?
              <Link
                className="font-semibold underline hover:text-black"
                to="/register">
              <span> SignUp</span></Link>  
            </p>


            </form> 
        </div>

    )
};

export default LogIn;



