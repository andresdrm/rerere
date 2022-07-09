import { React } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const NewPassword = () => 
{
    const code = useSelector((state) => state.user.code);
    const navigate = useNavigate();
    if(code === 0){
        navigate("/");
    }
    return(
        <>
            <div>
                <div className="mt-8"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Nueva contraseña</h1>
                    </div>
                </div>

                <div className=" justify-center p-4 items-center w-[40%] mx-auto">
                    <form>
                    <div className="mb-6">
                            <input type="text" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Codigo de verificación" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="password" id="newPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Nueva Contraseña" required>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Confirmar contraseña" required>
                            </input>
                        </div>
                        <div className="flex justify-center items-center flex-col mb-4">
                            <div className="mb-6">
                                <button type="button" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Confirmar</button>
                            </div>
                        </div>
                    
                    </form>
                </div>          
            </div>
        </>
    );
}
