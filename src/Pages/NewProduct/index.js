import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from "../../Component/Header";
import Default from '../../Assets/logo3.png'
import { createProduct } from '../../Slices/productSlice';
import { useNavigate } from 'react-router-dom';

export const NewProduct = () => 
{
   const [img, setImg] = useState("");
   
   const dispatch = useDispatch(); 
   const [datos, setDatos] = useState({
       productName: "",
       categories: "",
       img : "",
       price : 0,
       amount: 0,
       description: ""
   });

   const handleChange = (field, value) => {
         setDatos({
            ...datos,
            [field]: value,
          });
   
  }
  const navigate = useNavigate();
   const handleProduct = () => {
      dispatch(createProduct(datos));
      navigate("/userProducts");
   }


    return(
        <>
    <div>
   <div className="max-w-12 w-full py-12 -my-10 ">
      <Header />
   </div>
   <div className="mt-32">
      <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
         <h1 className='text-5xl'>Nuevo producto</h1>
      </div>
      <div className=" justify-center p-4 items-center w-[50%] mx-auto">
         <form onSubmit={handleProduct}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
               <div>
                  <input value={datos.productName} onChange={(e) => handleChange("productName", e.target.value)}  type="text" id="Product-Name" className="bg-gray-50 border-2 border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Nombre del producto" required>
                  </input>
               </div>
               <div>
                  <select onChange={(e) => handleChange("categories", e.target.value)} defaultValue={"DEFAULT"} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black">
                  <option value={datos.categories} disabled hidden>Tipo de producto</option>
                     <option value="Bano">Baño</option>
                     <option value="Hogar">Hogar</option>
                     <option value="Vivero">Vivero</option>
                     <option value="Limpieza">Limpieza</option>
                  </select>
               </div>
               <div>
                  <input value={datos.price} onChange={(e) => handleChange("price", e.target.value)} type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Precio" required>
                  </input>
               </div>
               <div>
                  <input value={datos.amount} onChange={(e) => handleChange("amount", e.target.value)} type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Cantidad" required>
                  </input>
               </div>
            </div>
            <div className="mb-6">
               <textarea value={datos.description} onChange={(e) => handleChange("description", e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Descripción"></textarea>
            </div>
            <div className="mb-6">
            <div className="flex justify-center p-4 items-center w-[100%] mx-auto ">
                        {img ? (
                            <img src={URL.createObjectURL(img)} alt="Foto usuario" className="shadow max-h-[300px] min-h-[300px] min-w-[220px] max-w-[220px] h-auto align-middle border-none cursor-pointer" />
                        ):(
                            <img src={Default} alt="Foto usuario" className="shadow max-h-[300px] min-h-[300px] min-w-[220px] max-w-[220px] h-auto align-middle border-none cursor-pointer" />
                        )}
                        
                        <input alt="Foto usuario" className="absolute shadow min-w-[220px] max-w-[220px] min-h-[300px] max-h-[300px] align-middle border-none opacity-0 cursor-pointer" type="file" accept="image/*" placeholder='img' 
                        onChange={(evt) => {setImg(evt.target.files[0]); handleChange("img", evt.target.files[0])}}/>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Confirmar</button>
         </form>
      </div>
   </div>
</div>
        </>
    );
}