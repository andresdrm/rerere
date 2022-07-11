import React from "react";

export const Card = (props) => {
    return(

        <div className="p-6 sm:w-1/1 lg:w-1/2 xl:w-1/4 gap-2 mx-auto">
            <div className="sm:w-[260px] lg:w-[320px] xl:w-[320px] h-full border-2 border-lime-500 border-opacity-60 rounded-lg overflow-hidden  bg-lime-700 text-white ">
                <div className="h-full p-6 hover:bg-lime-800 hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-lime-500 mb-1 ">{props.cardInfo.category}</h2>
                    <h1 className="text-2xl font-semibold mb-3 overflow-hidden truncate ">{props.cardInfo.name}</h1>
                    <p className="leading-relaxed mb-3  flex-initial  py-1  line-clamp-5 ">{props.cardInfo.description}</p>
                </div>
            </div>
        </div>
    );

};

