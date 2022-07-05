import { React } from 'react';

export const ForgotPassword = () => 
{
    return(
        <>
            <div>
                <div className="mt-8"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Restablecer contraseña</h1>
                    </div>
                </div>
                <div className=" justify-center p-4 items-center w-[40%] mx-auto">
                    <form>
                        <div className=" flex justify-center items-center mb-6">
                            <span  >Ingrese su correo electrónico para poder restablecer la contraseña</span>
                        </div> 
                        <div className="mb-6">
                            <input type="" id="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Email" required>
                            </input>
                        </div> 
                       
                        <div className="flex justify-center items-center flex-col mb-4">
                            <div className="mb-6">
                                <button type="button" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Enviar</button>
                            </div>
                        </div>
                    
                    </form>
                </div>          
            </div>
        </>
    );
}