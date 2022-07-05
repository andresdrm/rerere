import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {

    return (
        <>
        <React.Fragment>
        <form className="flex justify-between items-center w-[50%] mx-auto  border p-1 rounded-md text-black bg-gray-100/90">
            <div className="relative min-w-[100%] ">
            <div className="relative max-w-[90%]">
                <div  className="relative flex flex-wrap">
                    <input className="bg-transparent min-w-full  font-[Poppins] focus:outline-none"  type="text" placeholder={"productos"} truncate></input>
                </div>
            </div>
                <button className="absolute inset-y-0 right-0 flex items-center pr-0 ml-5"> <FaSearch /></button>
            </div>
        </form>
        </React.Fragment>
        </>
    );

};
export default SearchBar;