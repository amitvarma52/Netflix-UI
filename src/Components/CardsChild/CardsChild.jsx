import React, { useRef, useState } from "react";
import style from "./CardsChild.module.css";
import TrendingChild from "../Trending/TrendingChild/TrendingChild.jsx";
const CardsChild = ({ title, cardContainer }) => {
  const handleOn=(e)=>{
    e.currentTarget.children[1].style.display="block"
  }
  const handleOff=(e)=>{
    e.currentTarget.children[1].style.display="none"
  }
  return (
    <>
      <h3>{title}</h3>
      <div className={style.container}>
        {cardContainer.map((element) => {
          return (
            <div className={style.card} key={element.id} onMouseOver={handleOn} onMouseLeave={handleOff}>
              <img src={element.imageUrl}></img>
              <div className={style.show}>
              <TrendingChild p={element.description} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsChild;
