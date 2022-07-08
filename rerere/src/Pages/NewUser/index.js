import {React, useState} from 'react';
import { useDispatch, useSelector  } from "react-redux";
import Default from '../../Assets/default.jpg'
import { postCreateUser } from "../../Slices/userSlice";
import { Navigate } from "react-router-dom";

export const NewUser = () => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const isCreated = useSelector((state) => state.user.isCreated);
    const dispatch = useDispatch();
    

    return isCreated ? (
        <Navigate to="/" />
      ) : (
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
                            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Nombre completo" required 
                            value={name}  onChange={(evt) => {
                                setName(evt.target.value);
                              }}>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Email" required
                            value={email}  onChange={(evt) => {
                                setEmail(evt.target.value);
                              }}>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Contraseña" required
                            value={password}  onChange={(evt) => {
                                setPassword(evt.target.value);
                            }}>
                            </input>
                        </div> 
                        <div className="mb-6">
                            <input type="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Teléfono" pattern="[0-9]{8}" required
                            value={phone}  onChange={(evt) => {
                                setPhone(evt.target.value);
                            }}>
                            </input>
                        </div> 
                        <div className="flex justify-center items-center flex-col mb-4">
                            <div className="mb-6">
                                <button type="button" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                onClick={() => {dispatch(postCreateUser({name,email,password,phone})); }}>Iniciar Sesion</button>
                            </div>
                        </div>
                    
                    </form>
                </div>          
            </div>
        </>
    );
}