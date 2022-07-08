import Header from "../../Component/Header";
import Hero from "../../Component/Hero";
import Cards from "../../Component/Cards";
import { React, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

// import info from "./CardsInfo.js ";

// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../../Slices/cartSlice";


// import logo1 from '../../Assets/logo1.png'
export const Home = () => {


let id = 0;

 /* const handleToggle = () => {
    setData(data ={text: 'pichaaa', date:'valorant ya ya', category:'me cago en este curso'});
  };
  handleToggle();*/
  // const theme = useSelector(
  //   (state) => state.app.theme
  // );
  // const data =  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  return (
    <>
    <div>
      <Header />
      <Hero />
    <Cards/>
      {/* id++; */}
      {/* <Cards key={info.key} cardInfo={info}/> */}
      
    </div>
    </>
  );
}


