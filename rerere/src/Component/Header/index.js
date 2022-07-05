import React, {useState}from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import 

function Header(props) {
   const [nav, setNav] = useState(false)
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
    
  return (
   <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 '>
      <div>
         <h1 >
            <Link to="/" className="cursor-pointer">ReReRé</Link>
         </h1>
      </div>
      <ul className="hidden md:flex">
         <li ><Link to="/">Inicio</Link></li>
         <li><Link to="/productList">Productos a la venta</Link> </li>
         <li><Link to="/userProducts"> Mis productos</Link></li>
         <li><Link to="/About">Información </Link></li>
      </ul>
      <div className="hidden md:flex gap-3">
         <button type="button" href="/Cart"  onClick={navigateCart} className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
            <FaShoppingCart className="cursor-pointer text-2xl" />
         </button>
         <button type="button" onClick={navigateEditUser} className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white">
            <FaUser className="cursor-pointer text-2xl" />
         </button>
      </div>

      <div onClick={handleNav} className="md:hidden">
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/> } 
      </div>
      
      <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
         <ul>
            <h1>ReReRé</h1>
            <li  className="border-b">Inicio</li>
            <li  className="border-b">Productos a la venta </li>
            <li  className="border-b">Mis productos</li>
            <li  className="border-b">Información</li>
            <div className="flex flex-col">
               <button>Carrito</button>
               <button>Mi perfil</button>
            </div>
         </ul>
      </div>
      
   </div>
    );
}

export default Header;
