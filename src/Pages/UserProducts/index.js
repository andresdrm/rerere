import React from "react";
import Header from "../../Component/Header";
import SearchBar from "../../Component/SearchBar";
import ProductCard from "../../Component/ProductCard";
import {useNavigate } from "react-router-dom";
import ProductsData from "../productData.json"

let length = ProductsData.length;
const dataTemp = [];
let total = Math.ceil(ProductsData.length / 6);

function fillDataTemp(index){
  dataTemp.splice(0,dataTemp.length);
  for(let x = index-6; x < index && x !== length; x++){
      dataTemp.push(ProductsData[x]);
  }
}

function UserProducts(){

    
    let key = 0;
    let icon = true;
    let i = 0;
    const [value, setValue] = React.useState(length);
    const [page, setPage] = React.useState(1);
    fillDataTemp(page*6);
    function handleChange(newValue) {
      Promise.resolve(i =ProductsData.map(function(x) {return x.id; }).indexOf(newValue)).then(() => {
        ProductsData.splice(i,1);
        length = length -1;
        total = Math.ceil(length / 6);
        return setValue(length);
      });

    }

    const navigate = useNavigate();
    const navigateNewProduct = () => {
        navigate('/NewProduct');
      };

    return (
        <>
        <div>
          <div className="max-w-12 w-full py-12 -my-10 ">
            <Header />
          </div>
          <div className="mt-32">
            <div className="flex justify-center p-2 items-center w-[70%] mx-auto border-4 border-white border-b-lime-700">
              <h1 className="text-5xl">Mis productos</h1>
            </div>
            <div className="mt-14 mb-4">
              {" "}
              <SearchBar />
            </div>
            <div className="flex justify-center items-center flex-col mb-4">
              <button
                type="button"
                onClick={navigateNewProduct}
                className="inline-block px-6 py-2 border-2 border-lime-700 text-lime-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Nuevo Producto
              </button>
            </div>

            <div className="flex justify-center items-center flex-col ">
              <div className="grid grid-cols-3 grid-flow-row gap-28">
                {dataTemp.map((info) => {
                  key = key + 1;
                  return (
                    <ProductCard
                      key={key}
                      id={key}
                      icon={icon}
                      onChange={handleChange}
                      info={info}
                    />
                  );
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


          </div>
        </div>;               

        </>
      );
}
export default UserProducts;