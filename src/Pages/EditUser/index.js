import { React,  useState  } from 'react';
import Header from "../../Component/Header";
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../Slices/userSlice';
import { useNavigate } from "react-router-dom";

export const EditUser = () => 
{
    const [cambiar, setCambiar] = useState(false);
    
    const user = useSelector((state) => state.user.user);
    const [cambiarImg, setCambiarImg] = useState(null);

    
    const dispatch = useDispatch(); 
    const [datos, setDatos] = useState({
        id: user.id,
        name: user.name,
        phone: user.phone,
        picture: null,
        email: user.email,
        contrasena: "",
        contrasenaNueva: "",
        repetirContrasena: ""
    });

    const handleChange = (field, value) => {
        setDatos({
          ...datos,
          [field]: value,
        });
      };
    

    const cambiarContraseña = () =>{
        setCambiar(!cambiar);
    }
    const navigate = useNavigate();
    const setChanges = () =>{
        dispatch(editUser(datos));
        navigate('/home');
    }

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
                        {cambiarImg ? (
                            <img src={URL.createObjectURL(cambiarImg)} alt="Foto usuario" className="shadow rounded-full max-w-[13%] h-auto align-middle border-none cursor-pointer" />
                        ):(
                            <img src={user.picture} alt="Foto usuario" className="shadow rounded-full max-w-[13%] h-auto align-middle border-none cursor-pointer" />
                        )}
                        
                        <input alt="Foto usuario" className="absolute shadow rounded-full min-w-[9%] max-w-[9%] min-h-[18%] max-h-[18%] align-middle border-none opacity-0 cursor-pointer" type="file" accept="image/*" placeholder='img' 
                        onChange={(evt) => {setCambiarImg(evt.target.files[0]); handleChange("picture", evt.target.files[0])
              }}/>
                </div>


                <div className=" justify-center p-4 items-center w-[40%] mx-auto">
                <form onSubmit={setChanges}>
                    <div className="mb-6">
                        <input value={datos.name} onChange={(e) => handleChange("name", e.target.value)} type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Nombre completo" required>
                        </input>
                    </div> 
                    <div className="mb-6">
                        <input value={datos.phone} onChange={(e) => handleChange("phone", e.target.value)} type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Número" required>
                        </input>
                    </div> 
                    <div className="mb-6">
                        <input value={datos.email} onChange={(e) => handleChange("email", e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Email" required>
                        </input>
                    </div> 


                    {cambiar? (
                        <>
                            <div className="mb-6">
                                <input type="password" id="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block" placeholder="Contraseña actual " required>
                                </input>
                            </div> 
                            <div className="mb-6">
                                <input type="password" id="nuevaContraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block" placeholder="Nueva contraseña" required>
                                </input>
                            </div> 
                            <div className="mb-6">
                                <input type="password" id="confirmarContraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-black block" placeholder="Confirmar contraseña">
                                </input>
                            </div> 
                            <div className="mb-6">
                                <label id="cancelarCambio" className='text-sky-600 cursor-pointer text-sm' onClick={() => {cambiarContraseña()}}>Cancelar</label>
                                <label id="confirmar" className='text-sky-600 cursor-pointer text-sm mr-4 ml-2' onClick={() => {cambiarContraseña()}} >Confirmar</label>
                            </div> 
                    </>
                    ):(
                        <>
                            <div className="mb-6">
                                <label id="cambiarContraseñaTxt">Contraseña:   </label>
                                <label id="cambiarContraseña" className='text-sky-600 cursor-pointer' onClick={() => {cambiarContraseña()}}>Cambiar contraseña   </label>
                            </div> 
                                <button id="submit" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Confirmar</button>
                        </>
                    )}




                    
                </form>
             </div>          
                </div>


                <div>

            
            </div>
         
        </>
    );
}