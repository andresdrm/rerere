import { React } from 'react';
import Header from "../../Component/Header";

export const NewProduct = () => 
{
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
         <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
               <div>
                  <input type="text" id="Product-Name" className="bg-gray-50 border-2 border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Nombre del producto" required>
                  </input>
               </div>
               <div>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black">
                     <option disabled selected hidden>Tipo de producto</option>
                     <option value="Baño">Baño</option>
                     <option value="Comida">Comida</option>
                     <option value="Jardin">Jardin</option>
                     <option value="Limpieza">Limpieza</option>
                  </select>
               </div>
               <div>
                  <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Precio" required>
                  </input>
               </div>
               <div>
                  <input type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Cantidad" required>
                  </input>
               </div>
            </div>
            <div className="mb-6">
               {/* <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label> */}
               <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="Descripción"></textarea>
            </div>
            <div className="mb-6">
               <div className="flex justify-center items-center w-full">
                  <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                     <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para agregar archivos</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                     </div>
                     <input id="dropzone-file" type="file" className="hidden" />
                  </label>
               </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>
         </form>
      </div>
   </div>
</div>
        </>
    );
}