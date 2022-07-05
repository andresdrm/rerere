import { React } from 'react';
import Header from "../../Component/Header";
import Default from '../../Assets/default.jpg'

function nuevaContraseña()
{
    document.getElementById('submit').className = "hidden";
    document.getElementById('contraseña').className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block";
    document.getElementById('nuevaContraseña').className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block";
    document.getElementById('confirmarContraseña').className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block";
    document.getElementById('cambiarContraseñaTxt').className = "hidden";
    document.getElementById('cambiarContraseña').className = "hidden";
    document.getElementById('confirmar').className = "text-sky-600 cursor-pointer text-sm mr-4 ml-2";
    document.getElementById('cancelarCambio').className = "text-sky-600 cursor-pointer text-sm";
}

function ocultarCambioContraseña(){
    document.getElementById('submit').className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    document.getElementById('contraseña').className = "hidden";
    document.getElementById('nuevaContraseña').className = "hidden";
    document.getElementById('confirmarContraseña').className = "hidden";
    document.getElementById('cambiarContraseñaTxt').className = "";
    document.getElementById('cambiarContraseña').className = "text-sky-600 cursor-pointer";
    document.getElementById('confirmar').className = "hidden";
    document.getElementById('cancelarCambio').className = "hidden";
}

function cambiarContraseña(){

}


export const EditUser = () => 
{
   

    return(
        <>
            <div>
                <div className="max-w-12 w-full py-12 -my-10 "><Header /></div>
                <div className="mt-32"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Editar usuario</h1>
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
                        <label id="cambiarContraseñaTxt">Contraseña:   </label>
                        <label id="cambiarContraseña" className='text-sky-600 cursor-pointer' onClick={nuevaContraseña}>Cambiar contraseña   </label>
                    </div> 
                    <div className="mb-6">
                        <input type="password" id="contraseña" className="hidden" placeholder="Contraseña actual " required>
                        </input>
                    </div> 
                    <div className="mb-6">
                        <input type="password" id="nuevaContraseña" className="hidden" placeholder="Nueva contraseña" required>
                        </input>
                    </div> 
                    <div className="mb-6">
                        <input type="password" id="confirmarContraseña" className="hidden" placeholder="Confirmar contraseña">
                        </input>
                    </div> 
                    <div className="mb-6">
                        <label id="cancelarCambio" className='hidden' onClick={ocultarCambioContraseña}>Cancelar</label>
                        <label id="confirmar" className='hidden' onClick={() => {ocultarCambioContraseña(); cambiarContraseña()}} >Confirmar</label>
                    </div> 
                    <button id="submit" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>
                </form>
             </div>          
                </div>


                <div>

            
            </div>
         
        </>
    );
}