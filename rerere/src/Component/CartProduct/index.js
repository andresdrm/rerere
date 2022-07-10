import React from "react";
import { useState } from "react";
import product from '../../Assets/botellas.jpg';
import shampoo from '../../Assets/shampoo.jpg';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../../Slices/cartSlice";
import Mixpanel from "../../services/mixpanel";


function CartProduct(props) {
	

	const dispatch = useDispatch();
	const [hideProduct, setStatus] = useState(false);

	const handleChange = (event) => {
		props.onChange(event);
	};

    return (
     
			<>
				<div name="item" className="flex justify-between items-center pt-4 mt-4 border-t">
            				<div className="flex  items-center">
                                <img src={props.information.url} alt="producto" className="rounded-full max-h-24 max-w-24 "></img>

            					<div className="flex flex-col ml-3 ">
            						<span className="text-md font-medium w-auto">{props.information.name}</span>
                                    <span className="text-xs font-light text-gray-400">{props.information.company}</span>
            						<span className="text-xs font-light text-gray-400">#{props.information.id}</span>
            					</div>			
            				</div>

            				<div className="flex justify-center items-center">
            					
            					<div className="pr-8 flex">
                                    <span className="text-md text-center font-medium w-auto">{props.information.amount}</span>
            					</div>

            					<div className="pr-8">
                                    <span className="text-md font-medium w-auto"> ₡{props.information.price}</span>
            					</div>
                                <div>
                                    <FaTrash className="cursor-pointer "  onClick={() => {dispatch(removeItem(props.information)); handleChange(props.information.price);Mixpanel.track(Mixpanel.TYPES.REMOVE_PRODUCT_FROM_CART)}}/>
            					</div>
            				</div>
            				
            			</div>	
			</>
      
    )
    
}
export default CartProduct;


