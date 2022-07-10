import React, {useState}from "react";
import {useDispatch, useSelector} from "react-redux";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Slices/userSlice";
import { Navigate } from "react-router-dom";
import Mixpanel from "../../services/mixpanel";
// import 

function Header(props) {
   const [nav, setNav] = useState(false);
   const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
   const dispatch = useDispatch();
   const handleNav = ()=>
   {
      setNav(!nav)
   };
   const navigate = useNavigate();

   const navigateCart = () => {
      navigate('/Cart');
    };

    const navigateEditUser = () => {
      navigate('/EditUser');
    };

    const navigateLogout = () => {
         dispatch(logout());
        // navigate('/');          
    };
    
return !userIsLoggedIn ? (
      <Navigate to="/" />
    ) : (
   <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 '>
      <div>
         <h1 >
            <Link to="/home" className="cursor-pointer">ReReRé</Link>
         </h1>
      </div>
      <ul className="hidden md:flex">
         <li ><Link onClick ={()=>
              {
               Mixpanel.track(Mixpanel.TYPES.GO_TO_HOME)
            }} to="/home">Inicio</Link></li>
      
         <li><Link onClick ={()=>
            {
               Mixpanel.track(Mixpanel.TYPES.GO_TO_PRODUCT_LIST)
            }} to="/productList">Productos a la venta</Link> </li>
         <li><Link onClick ={()=>
            {
               Mixpanel.track(Mixpanel.TYPES.GO_TO_PRODUCT_LIST_USER)
            }}to="/userProducts"> Mis productos</Link></li>
         <li><Link onClick ={()=>
            {
               Mixpanel.track(Mixpanel.TYPES.GO_TO_ABOUT)
            }} to="/About">Información </Link></li>
      </ul>
      <div className="hidden md:flex gap-3">
         <button type="button"  onClick={()=> {navigateCart(); Mixpanel.track(Mixpanel.TYPES.GO_TO_CART); }} className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
            <FaShoppingCart className="cursor-pointer text-2xl" />
         </button>
         <button type="button" onClick={()=> { navigateEditUser(); Mixpanel.track(Mixpanel.TYPES.GO_TO_EDIT_USER);  }} className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
            <FaUser className="cursor-pointer text-2xl" />
         </button>
         <button type="button" onClick={() => { navigateLogout(); Mixpanel.track(Mixpanel.TYPES.USER_SIGN_OUT);}} className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
            <FaSignOutAlt className="cursor-pointer text-2xl" />
         </button>
      </div>

      <div onClick={handleNav} className="md:hidden">
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/> } 
      </div>
      
      <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
         <ul>
            <h1>ReReRé</h1>
            <li  onClick ={()=>{ Mixpanel.track(Mixpanel.TYPES.GO_TO_HOME)}} className="border-b">Inicio</li>
            <li   onClick ={()=>{ Mixpanel.track(Mixpanel.TYPES.GO_TO_PRODUCT_LIST)}} className="border-b">Productos a la venta </li>
            <li  onClick ={()=>{ Mixpanel.track(Mixpanel.TYPES.GO_TO_PRODUCT_LIST_USER)}} className="border-b">Mis productos</li>
            <li   onClick ={()=>{ Mixpanel.track(Mixpanel.TYPES.GO_TO_ABOUT)}} className="border-b">Información</li>
            <div className="flex flex-col">
               <button onClick={()=> { Mixpanel.track(Mixpanel.TYPES.GO_TO_CART); navigateCart();}}> Carrito </button>
               <button onClick={()=> {  Mixpanel.track(Mixpanel.TYPES.GO_TO_EDIT_USER); navigateEditUser(); }}>Mi perfil</button>
               <button onClick={() => {Mixpanel.track(Mixpanel.TYPES.USER_SIGN_OUT); navigateLogout();}}  >Cerrar sesión</button>
            </div>
         </ul>
      </div>
      
   </div>
    );
}

export default Header;
