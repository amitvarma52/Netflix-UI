import React from "react";
import style from "./TrendingChild.module.css";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
const TrendingChild = (props) => {
  return (
    <>
      <p>{props.p}</p>
      <div className={style["btn-container"]}>
        <button>
          <FaPlay /> Play
        </button>
        <button className={style["info-btn"]}>
          <FaCircleInfo /> More Info
        </button>
      </div>
    </>
  );
};

export default TrendingChild;
