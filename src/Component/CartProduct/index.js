import React from "react";
import { useState } from "react";
import product from '../../Assets/botellas.jpg';
import shampoo from '../../Assets/shampoo.jpg';
import { FaTrash } from "react-icons/fa";



function CartProduct(props) {
	


	const [hideProduct, setStatus] = useState(false);

	const handleChange = (event) => {
		props.onChange(event);
	};

	console.log("Datos:", props);
    return (
        <>
		{!hideProduct ? (
			<>
				<div name="item" className="flex justify-between items-center pt-4 mt-4 border-t">
            				<div className="flex  items-center">
                                <img src={product} alt="producto" className="rounded-full max-h-24 max-w-24 "></img>

            					<div className="flex flex-col ml-3 ">
            						<span className="text-md font-medium w-auto">{props.information.name}</span>
                                    <span className="text-xs font-light text-gray-400">{props.information.company}</span>
            						<span className="text-xs font-light text-gray-400">#{props.information.id}</span>
            					</div>			
            				</div>

            				<div className="flex justify-center items-center">
            					
            					<div className="pr-8 flex">
                                    <span className="text-md text-center font-medium w-auto">2</span>
            					</div>

            					<div className="pr-8">
                                    <span className="text-md font-medium w-auto"> ₡{props.information.precio}</span>
            					</div>
                                <div>
                                    <FaTrash className="cursor-pointer "  onClick={() => {setStatus(true); handleChange(props.information.precio)}}/>
            					</div>
            				</div>
            				
            			</div>	
			</>
      	) : null}      			
         </>
    )
    
}
export default CartProduct;


