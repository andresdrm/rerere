import { React } from 'react';
import Default from '../../Assets/default.jpg'

export const NewUser = () => 
{
    return(
        <>
            <div>
                <div className="mt-8"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Registrate</h1>
                    </div>
                </div>
                <div className="flex justify-center p-4 items-center w-[70%] mx-auto ">
                        <img src={Default} alt="..." className="shadow rounded-full max-w-[13%] h-auto align-middle border-none cursor-pointer" />
                        <input className="absolute shadow rounded-full min-w-[9%] max-w-[9%] min-h-[18%] max-h-[18%] align-middle border-none opacity-0 cursor-pointer" type="file"  placeholder='img' />    
                </div>


                <div className=" justify-center p-4 items-center w-[40%] mx-auto">
                    <form>
                        <div className="mb-6">
                            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Nombre completo" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="text" id="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Usuario" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Email" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Contraseña" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Confirmar contraseña" required>
                            </input>
                        </div> 
                        <div className="flex justify-center items-center flex-col mb-4">
                            <div className="mb-6">
                                <button type="button" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Iniciar Sesion</button>
                            </div>
                        </div>
                    
                    </form>
                </div>          
            </div>
        </>
    );
}