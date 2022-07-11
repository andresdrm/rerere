import React from "react";
import back from '../../Assets/nbg.jpg'
import { useSelector } from "react-redux";

function Hero() {
    const user = useSelector((state) => state.user.user);
    return (
        <>
        <div className="w-full h-screen relative   ">
            <img src={back}  alt="bg" className="w-full h-full object-cover " ></img>
            <div className="absolute  h-full top-0 left-0 bg-gray-900/30"></div>
            <div className="absolute top-0  w-full h-full flex flex-col justify-center text-center text-white p-4">
                <h1 className="font-poppins text-4xl sm:text-6xl">
                    Eccommerce
                </h1>
                <h2 className="py-4 text-2xl sm:text-4xl ">
                    Reducir, reciclar y reutilizar
                </h2>
                <h4 className=" text-2xl sm:text-4xl ">
                    Bievenido {user?.name} 
                </h4>
            </div>
        </div>
        </>
    );
 
};

export default Hero;