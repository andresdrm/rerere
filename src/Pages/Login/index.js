import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ReReRe2 from '../../Assets/ReReRe2.png'
import {useNavigate } from "react-router-dom";
import { postLogin } from "../../Slices/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);

  //const errorMessage = useSelector((state) => state.user.errorMessage);

  const navigate = useNavigate();
  const navigateForgotPassword = () => {
      navigate('/ForgotPassword');
    };

    const navigateNewUser = () => {
      navigate('/NewUser');
    };

  const dispatch = useDispatch();
//flex items-center justify-center h-screen

  return userIsLoggedIn ? (
    <Navigate to="/home " />
  ) : (
    <div className="mt-12"> 
      <div className="flex justify-center p-2 items-center w-[50%] mx-auto ">
        <img className={`flex justify-center`} src={ReReRe2} alt="logo"></img>
        
      </div>
      <div className=" justify-center p-4 items-center w-[40%] mx-auto">
          <form>
              <div className="mb-6">
                  <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Correo electronico" required value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }} >
                  </input>
              </div> 
              <div className="mb-6">
                  <input type="password" id="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-black" placeholder="Contraseña" required value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}>
                  </input>
              </div> 
              <div className="flex justify-center items-center flex-col mb-4">
                <div className="mb-6">
                  <button type="button" className="w-48 px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                  onClick={() => {dispatch(postLogin({email,password,})); }}>Iniciar Sesion</button>
                </div>
                <div className="mb-4 cursor-pointer">
                  <span  onClick={navigateForgotPassword} className="hover:text-amber-600"  > ¿Olvidaste tu Contraseña?</span>
                </div>
                <div className="mb-6 cursor-pointer">
                  <span  onClick={navigateNewUser} className="hover:text-amber-600"  > Crear cuenta</span>
                </div>
              </div>
          </form>
      </div>
    </div>
            
  );
}
