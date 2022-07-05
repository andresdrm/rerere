import React from "react";
// import { BiSearch } from "react-icons/bi";
import {Card} from "./Card";
// import info from "../../Pages/Home/CardsInfo"
 

const info =  [
    {
      key: 1,
      img: "",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      date: "valorant ya ya",
      category: "mne cago en este curso",
      qty: 4
    },
    {
      key: 2,
      img: "",
      text: "Pichaaaaa",
      date: "valorant ya ya",
      category: "mne cago en este curso y dieguillo que es un necio que no para de decir errores estupidos",
      qty: 4
    },
    {
      key: 3,
      img: "",
      text: "Pichaaaaa",
      date: "valorant ya ya",
      category: "mne cago en este curso",
      qty: 4
    },
    {
      key: 4,
      img: "",
      text: "Pichaaaaa",
      date: "valorant ya ya",
      category: "mne cago en este curso",
      qty: 4
    }
  ];

export const Cards = (props) => {
   console.log(props.cardInfo);
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
                                {info.map((data) => {

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

