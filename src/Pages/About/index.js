import { React } from 'react';
import Header from "../../Component/Header";
import { FaWhatsapp,FaFacebookF,FaTwitter } from "react-icons/fa";

export const About = () => 
{
    return(
        <>
            <div>
                <div className="max-w-12 w-full py-12 -my-10 "><Header /></div>
                <div className="mt-32"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Acerca de ReReRé</h1>
                    </div>
                </div>
                <div className=" justify-center p-4 items-center w-[50%] mx-auto">
                <p className='text-xl'>
                    Somos un ecommerce de productos amigables con el ambiente, nuestro
                    propósito es cumplir con las 3 R, reducir, reciclar y reutilizar, y de 
                    esta manera impulsar a los emprendedores costarricenses promocionando 
                    sus productos en nuestra página ReReRe, y así continuar ayudando al medio 
                    ambiente y hacer de Costa Rica un país más verde.
                </p>
          
                </div>
                    <div className="flex justify-center p-8 items-center w-[50%] mx-auto">
                        <div className=" grid grid-cols-3 gap-20 ">
                            <div className="...">
                                <button type="button" className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white ">
                                <FaWhatsapp className="cursor-pointer text-2xl" />
                                </button>
                            </div>
                            <div className="...">
                                <button type="button" className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
                                <FaFacebookF className="cursor-pointer text-2xl" />
                                </button>
                            </div>
                            <div className="...">
                                <button type="button" className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
                                <FaTwitter className="cursor-pointer text-2xl" />
                                </button>
                            </div>
                            
                        </div>       
                    </div>
            </div>
           
        </>         
    );
}