import React, {  useState } from "react";
import Header from "../../Component/Header";
import Product from "../../Component/CartProduct";
import {useNavigate } from "react-router-dom";
const data = 
[
    {id: 1, name: "Botellas eco", company: "ecoBotellas", cantidad:"5" , precio: 12500},
    {id: 2, name: "Shampoo", company: "pantene", cantidad:"2" , precio: 4500},
    {id: 3, name: "planta x", company: "vivero cr", cantidad:"15" , precio: 850},
];

export const Cart = () => 
{  
    let amount = 0;

    data.map((product) => {

        return(
            amount = amount + product.precio
        );
     
    })
   
    const [total, setTotal] = useState(amount);
    const handleChange = (newValue) => {
        console.log("Recibe algo:",newValue);
        setTotal(total - newValue);
    }
    const navigate = useNavigate();
    const navigateKeepShopping = () => {
        navigate('/productList');
      };
    return(
        <>
            <div>
                <div className="max-w-12 w-full py-12 -my-10 "><Header /></div>
                <div className="mt-32"> 
                    <div className="flex justify-center p-4 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
                        <h1 className='text-5xl'>Carrito</h1>
                    </div>
                </div>
            </div>
            <div className="h-screen">
                <div className="py-10">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg  md:max-w-5xl">
                        <div className="md:flex ">
                            <div className="w-full ">
                                <div className="md:grid md:grid-cols-2 gap-2 ">                    
                                    <div className="col-span-2 p-5">
                                        <div className="flex justify-between items-center">
                                                <div className="flex  items-center">
                                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles</h3>
                                                </div>

                                            <div className="flex justify-center items-center">
                                                
                                                <div className="pr-8 flex">
                                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Disponibles</h3>
                                                </div>

                                                <div className="pr-8">	
                                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Precio</h3>
                                                </div>
                                                

                                            </div> 
                                            
                                        </div>
                                        {data.map((product) => {
                                                        console.log("Product",product)
                                                        amount += product.precio
                                                        
                                                        return(
                                                            <Product key={product.id} information={product} onChange={handleChange} />
                                                        );
                                                     
                                            })}
                                       

                                        <div className="flex justify-between items-center mt-6 pt-6 border-t"> 
                                            <div className="flex items-center cursor-pointer">
                                                <i className="fa fa-arrow-left text-sm pr-2"></i>
                                                <span  onClick={navigateKeepShopping} className="text-md  font-medium hover:text-amber-600 text-amber-500">Continuar comprando</span>
                                            </div>

                                            <div className="flex justify-center items-end">
                                                <span className="text-sm font-medium text-gray-400 mr-1">Total:</span>
                                                <span className="text-lg font-bold text-gray-800 " > ₡{total}</span>
                                                
                                            </div>
                                        </div> 
                                    </div>         		
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
