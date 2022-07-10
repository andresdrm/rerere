import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../Slices/userSlice';

export const NewPassword = () => 
{
    const code = useSelector((state) => state.user.code);
    const dateT = useSelector((state) => state.user.date);
    const [validate, setValidate] = useState(true);
    const navigate = useNavigate();
    if(code === -1){
        navigate("/");
    }


    const validateCode = (e) => {
      if(dateT > new Date().toISOString()){
        if(Number(e) !== Number(code)){
            setValidate(true);
        }else{
            setValidate(false);
        }
      }else{
        setValidate(true);
      }
    }

    const dispatch = useDispatch(); 
    const [datos, setDatos] = useState({
        givenCode: 0,
        correo: "",
        contrasena: "",
        confirmarContrasena: "",
        codigoExpiracion: dateT
    });

    const handleChange = (field, value) => {
        setDatos({
          ...datos,
          [field]: value,
        });
      };

    const setChanges = () =>{
        dispatch(changePassword(datos));
        navigate('/');
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
                    <form  onSubmit={setChanges}>
                        <div className="mb-6">
                            <input onChange={(e) => {handleChange("correo",e.target.value);}} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Correo eletrónico" required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <input value={datos.givenCode} onChange={(e) => {handleChange("givenCode",e.target.value); validateCode(e.target.value);}}  type="number" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Código de verificación" required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <input onChange={(e) => {handleChange("contrasena",e.target.value);}}  type="password" id="newPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black disabled:opacity-60" placeholder="Nueva Contraseña" required disabled={validate}>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input onChange={(e) => {handleChange("confirmarContrasena",e.target.value);}} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black disabled:opacity-60" placeholder="Confirmar contraseña" required disabled={validate}>
                            </input>
                        </div>
                        <div className="flex justify-center items-center flex-col mb-4">
                            <div className="mb-6">
                                <button type="submit" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out disabled:opacity-60" disabled={validate}>Confirmar</button>
                            </div>
                        </div>                                
                    </form>
                </div>          
            </div>
        </>
    );
}
