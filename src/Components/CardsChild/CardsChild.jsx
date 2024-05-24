import React, { useRef, useState } from "react";
import style from "./CardsChild.module.css";
import TrendingChild from "../Trending/TrendingChild/TrendingChild.jsx";
const CardsChild = ({ title, cardContainer }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className={style.container}>
        {cardContainer.map((element) => {
          return (
            <div className={style.card} key={element.id}>
              <img src={element.imageUrl}></img>
              <TrendingChild p={element.description} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsChild;
