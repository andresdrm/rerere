import React from "react";
import {  FaPen, FaTrashAlt, FaTimes, FaPlus, FaCheck, FaInfoCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../Slices/cartSlice";
import Mixpanel from "../../services/mixpanel";

const categories = ["Limpieza", "Baño"];

function deleteCategory(index, category){
    (document.getElementsByName("category")[index]).className="hidden";
    categories.splice(categories.indexOf(category), 1);
    
}

function addCategory(){
  (document.getElementById("addCategory")).className="hidden";
  (document.getElementById("inputCategory")).className="bg-gray-50 border border-gray-300 text-gray-900 text-sm placeholder-black self-center text-center mb-2 ";
  (document.getElementById("cancelNewCategory")).className="";
  (document.getElementById("addNewCategory")).className="";
}

function cancelCategory(){
  (document.getElementById("addCategory")).className="";
  (document.getElementById("inputCategory")).className="hidden";
  (document.getElementById("cancelNewCategory")).className="hidden";
  (document.getElementById("addNewCategory")).className="hidden";
}

function saveCategory(a){
  let value = (document.getElementById("inputCategory"))?.value;
  if(value !== 'DEFAULT' && !categories.includes(value) && value !== undefined){
    categories.push(value);
    (document.getElementById("addCategory")).className="";
    (document.getElementById("inputCategory")).className="hidden";
    (document.getElementById("cancelNewCategory")).className="hidden";
    (document.getElementById("addNewCategory")).className="hidden";
  }

   
}



function ProductCard(props){
   
    
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch();    

    function twoCalls() {
      setShowModal(false);
      Promise.resolve(saveCategory()).then(() => {
        return setShowModal(true);
      });
    
    }
    function handleChange(event) {
      props.onChange(event);
    }

    
    return(
<>
  <div className="lg:col-span-1  sm:col-span-3 max-h-[480px] min-h-[480px]">
    <div className="object-fill max-h-[480px] min-h-[480px] max-w-[320px] min-w-[320px] bg-white rounded-lg border border-gray-200 shadow-md ">
      <div className="">
        <a href="/">
          <img
            className="max-h-[350px] min-h-[350px] max-w-[320px] min-w-[320px]  rounded-t-sm"
            src={props.info.url}
            alt="Producto"
          />
        </a>
      </div>
      <div className="p-5 align-baseline relative mt-[-5%]">
        <p className="self-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.info.name}
        </p>
        <p className="self-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          Precio: ₡ {props.info.price}
        </p>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <div className="flex ">
            <div>
              <p className="self-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {props.info.company}
              </p>
            </div>
            <div className="grow"></div>
            {props.icon ? (
              <>
                <div className=" flex-none">
                  <p
                    className="self-end cursor-pointer hover:fill-current hover:text-gray-500"
                    onClick={() => setShowModal(true)}
                  >
                    <FaPen />
                  </p>
                </div>
                <div className=" flex-none   ml-2">
                  <p
                    className="self-end cursor-pointer hover:fill-current hover:text-gray-500"
                    onClick={() => handleChange(props.info.id)}
                  >
                    <FaTrashAlt />
                  </p>
                </div>
              </>
            ) : (
              <>
              <div className=" flex-none self-center content-center items-center ">
                  <p
                    className="cursor-pointer hover:text-gray-500"
                    onClick={() => setShowModal(true)}
                  >
                    <FaInfoCircle />
                  </p>
                </div>

              <div className=" flex-none   ml-3">
                <button
                  className="self-center content-center items-center bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {Mixpanel.track(Mixpanel.TYPES.ADD_PRODUCT_TO_CART); dispatch(addItem(props.info)); alert(` Se ha agregado ${props.info.name} al carrito` );}}
                >
                  Agregar
                </button>
              </div>
              </>
            )}

            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative md:min-w-[500px] w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          {props.icon ? (
                              <input placeholder={props.info.name} ></input>
                          ) : (
                            <p className="self-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {props.info.name}
                          </p>
                          )}
                          
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <div className="my-4 text-slate-500 text-lg leading-relaxed">
                           {props.icon ? (
                               <label
                               title="Modificar imagen"
                               className=" absolute ml-[146px] hover:shadow-lg cursor-pointer max-h-[10rem] min-h-[10rem] max-w-[10rem] min-w-[10rem] "
                             >
                               <input
                                 className="absolute shadow  min-w-[90%] max-w-[90%] min-h-[50%] max-h-[50%] m-auto border-none  cursor-pointer hidden"
                                 type="file"
                                 placeholder="img"
                               />
                             </label>
             
                            ) : null}
   
                          <img
                            className="object-fill max-h-40 min-h-[10rem] max-w-[10rem] min-w-[10rem]  rounded-t-sm m-auto mb-[5%]"
                            src={props.info.url}
                            alt="Producto"
                          />

                          Precio: ₡
                          {props.icon ? (
                            <input
                            type="number"
                            placeholder={props.info.price}
                            className="w-[15%] ml-2 hover:shadow"
                            />
                          ) : (
                            <label>{props.info.price}</label>
                          )}
                          
                          <div className="flex flex-wrap text-center pt-4 mb-2">
                            {categories.map((category, index) => {
                           
                              return (
                              <>   
                                
                                {props.icon ? (
                                  <div
                                  name="category"
                                  className="mr-2 mb-2 rounded-full pl-2 pr-1 py-1 text-xs bg-lime-600 text-lime-900 flex gap-1"
                                  key={index}
                                >
                                  <p>{category}</p>
                                    <FaTimes
                                    className="text-lime-700 self-center cursor-pointer hover:fill-current hover:text-lime-900"
                                    onClick={() =>
                                      deleteCategory(index, category)
                                    }
                                  />
                            
                                </div>

                                ) : (
                                  <div
                                    name="category"
                                    className="mr-2 mb-2 rounded-full pl-2 pr-2 py-1 text-xs bg-lime-600 text-lime-900 flex gap-1"
                                    key={index}
                                    >
                                    <p>{category}</p>
                                  </div>
                                 )}
                                
                              </>
                              );
                            })}
                            {props.icon ? (
                              <>
                              <div id="addCategory">
                              <FaPlus
                                  className="w-3 h-3 mt-[5px] cursor-pointer hover:fill-current hover:text-gray-900"
                                  onClick={() => {
                                    addCategory(this);
                                  }}
                                />
                              </div>

                              <select
                              id="inputCategory"
                              className="hidden"
                              defaultValue={"DEFAULT"}
                            >
                              <option value="DEFAULT" disabled hidden>
                                Categoría
                              </option>
                              <option value="Baño">Baño</option>
                              <option value="Comida">Comida</option>
                              <option value="Jardin">Jardin</option>
                              <option value="Limpieza">Limpieza</option>
                            </select>

                            <div id="cancelNewCategory" className="hidden">
                              <FaTimes
                                className="w-3 h-3 mt-[5px] cursor-pointer hover:fill-current hover:text-gray-900 ml-1"
                                onClick={() => cancelCategory()}
                              />
                            </div>
                            <div id="addNewCategory" className="hidden">
                              <FaCheck
                                className="w-3 h-3 mt-[5px] cursor-pointer hover:fill-current hover:text-gray-900 ml-1"
                                onClick={() => {
                                  twoCalls();
                                }}
                              />
                            </div>

                              </>
                            ) : null}
                            

                            
                          </div>
                          {props.icon ? (
                            <div>
                              <textarea className="form-control block w-full px-3 py-1.5 font-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none max-h-[130px]" id="exampleFormControlTextarea1" rows="3" value={props.info.description} ></textarea>
                          </div>
                           ) : (
                            <div>
                               <textarea disabled className="form-control block w-full px-3 py-1.5 font-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none max-h-[130px]" id="exampleFormControlTextarea1" rows="3" value={props.info.description}></textarea>
                            </div>
                          )}
                          
                        </div>
                      </div>

                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cerrar
                        </button>
                        
                        {props.icon ? (
                            <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                            >
                              Guardar cambios
                            </button>
                        ) : null}

                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    );
};
export default ProductCard;