import React, {useState} from "react";
// import ProductListComponent from "../../Component/ProductListComponent";
import Header from "../../Component/Header";
import SearchBar from "../../Component/SearchBar";
import ProductCard from "../../Component/ProductCard";
import { FaSprayCan, FaBath, FaLeaf, FaCoffee } from "react-icons/fa";
import ProductsData from "../productData.json"
import { FaSearch } from "react-icons/fa";

let length = ProductsData.length;
let products = ProductsData;
const dataTemp = [];
let total = Math.ceil(length / 6);

function fillDataTemp(index, array)
{
  length = array.length;
  total = Math.ceil(length / 6);
  console.log("variables", length, total);
  dataTemp.splice(0,length);
  for(let x = index-6; x < index && x !== length; x++){
      dataTemp.push(array[x]);
  }
  console.log("Arreglo".dataTemp);
}



function ProductList(){
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = useState("");
  // console.log(ProductsData.filter(user=> user.name.includes("Botella")));


  function update(event)
  {
    setQuery(event);
    console.log("que",query);
    console.log("Filtro",products.filter(user => user.name.toLowerCase().includes(query)));
    fillDataTemp(page*6, products.filter(user=> user.name.toLowerCase().includes(query)))
  }

  if(query === "")
  {
    fillDataTemp(page*6, ProductsData);
  }

  
  
    let key = 0;

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
                    <input className="bg-transparent min-w-full  font-[Poppins] focus:outline-none" onChange={(e) => update(e.target.value)} type="text" placeholder={"Products"} truncate></input>
                </div>
            </div>
                <button className="absolute inset-y-0 right-0 flex items-center pr-0 ml-5"> <FaSearch /></button>
            </div>
        </form>
          </div>
          <div className="flex justify-center p-8 items-center w-[50%] mx-auto">
            <div className=" grid grid-cols-4 gap-20 ">
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white "
                >
                  <FaSprayCan className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white"
                >
                  <FaBath className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white"
                >
                  <FaLeaf className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="...">
                <button
                  type="button"
                  className="bg-lime-700 p-2 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-300 focus:ring-white"
                >
                  <FaCoffee className="cursor-pointer text-2xl" />
                </button>
              </div>

            </div>
          </div>

          <div className="flex justify-center items-center flex-col ">
            <div className="grid grid-cols-3 grid-flow-row gap-28">
              {dataTemp.map((info) => {
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