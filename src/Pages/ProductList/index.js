import {React, useState, useEffect} from "react";
import Header from "../../Component/Header";
import { getProducts, getProductsFiltered, getProductsCategory } from "../../Slices/productSlice";
import ProductCard from "../../Component/ProductCard";
import { FaSprayCan, FaBath, FaLeaf, FaCoffee, FaTimes } from "react-icons/fa";
import {useDispatch, useSelector } from "react-redux";

let length = 0;
const dataTemp = [];
let total = 0;

function fillDataTemp(index, array)
{
  length = array.length;

  total = Math.ceil(length / 6);
  dataTemp.splice(0,dataTemp.length);
  for(let x = index-6; x < index && x < array.length; x++){
      dataTemp.push(array[x]);
  }
}



function ProductList(){
  const [page, setPage] = useState(1);
  const[query, setQuery] = useState("");
  const[category, setCategory] = useState("");
  
  let key = 0;
  
  const productData = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if(query === "")
    {
      if(category === ""){
         dispatch(getProducts(productData));
      }else{
        dispatch(getProductsCategory(category));
      }
      
    }
    else
    {
      dispatch(getProductsFiltered(query));
    }
  }, [dispatch, query, category, productData]);
  
  if(productData !== null && productData.length > 0){
    length = productData.length;
    total =  Math.ceil(productData.length / 6);
    fillDataTemp(page*6, productData);
  }

  return (
    <>
        <div>
          <div className="max-w-12 w-full py-12 -my-10 ">
            <Header />
          </div>
          <div className="mt-32">
            {" "}
            {/* <SearchBar /> */}
            <form className="flex justify-between items-center w-[50%] mx-auto  border p-1 rounded-md text-black bg-gray-100/90">
            <div className="relative min-w-[100%] ">
            <div className="relative max-w-[90%]">
                <div  className="relative flex flex-wrap">
                    <input className="bg-transparent min-w-full  font-[Poppins] focus:outline-none" 
                    value={query} onChange={(evt) => {
                    setQuery(evt.target.value);
            }}  type="text" placeholder={"Busar un producto"} truncate></input>
                </div>
            </div>
               
            </div>
        </form>
          </div>
          <div className="flex justify-center p-8 items-center w-[50%] mx-auto">
            <div className=" grid grid-cols-5 gap-20 ">
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white " onClick={() => setCategory("limpieza")}
                >
                  <FaSprayCan className="cursor-pointer text-2xl"  />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white" onClick={() => setCategory("bano")}
                >
                  <FaBath className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white" onClick={() => setCategory("vivero")}
                >
                  <FaLeaf className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white" onClick={() => setCategory("hogar")}
                >
                  <FaCoffee className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white" onClick={() => setCategory("")}
                >
                  <FaTimes className="cursor-pointer text-2xl" />
                </button>
              </div>

            </div>
          </div>

          <div className="flex justify-center items-center flex-col ">
            <div className="grid grid-cols-3 grid-flow-row gap-28">
              {dataTemp?.map((info) => {
                key++;
                return <ProductCard key={key} info={info} />;
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul className="flex list-style-none">
                <li id="previous" className="page-item"><div id="prevPage"
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
                    onClick={() => {setPage(page-1 > 0? page-1: 1)}} aria-label="Anterior">
                    <span aria-hidden="true">&laquo;</span>
                  </div></li>
                <li className="page-item"><div
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                    >{page}</div></li>
                <li id="next" className="page-item"><div id=""
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
                    onClick={() => {setPage(page+1 < total+1 ? page+1 : page)}}  aria-label="Siguiente">
                    <span aria-hidden="true">&raquo;</span>
                  </div></li>
              </ul>
            </nav>
          </div>

        </div>;

        </>
      );
}
export default ProductList;

// onClick={() => {dispatch(getProductsFiltered({query})); }}