import { React, useEffect } from "react";
import {Card} from "./Card";
import { getCards } from "../../Slices/homeSlice";
import {useDispatch, useSelector } from "react-redux";

  export default function Cards(props){
  const cards = useSelector((state) => state.home.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

    return (
        <>
        <div className="h-auto ">
            <section className="md: flex  items-center text-gray-600  ">
                <div className="w-screen px-20 py-24 mx-auto ">
                    <div className="text-center mb-12 ">
                        <h5 className="text-base md:text-lg text-lime-500 px-3 mb-1"> Noticias recientes</h5>
                        <h1 className="text-3xl md:text-5xl text-gray-700 font-semibold">Nuevos productos en todas las categorias</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 ">
                        { cards?.map((data) => {
                          return (
                            <Card key={data.key} cardInfo={data}/>
                          );
                        })}
                    </div>
                </div>  
            </section>
        </div>
        </>
    );
 
};

