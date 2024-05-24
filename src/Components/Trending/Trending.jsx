import React from "react";
import style from "./Trending.module.css";
import TrendingChild from "./TrendingChild/TrendingChild";
import trendingLogo from "../../Images/trendingLogo.png";
const Trending = () => {
  const description='A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.'
  return (
    <>
      <div className={style.trending}>
        <div className={style["trending-container"]}>
          <img src={trendingLogo} />
          <TrendingChild p={description} />
        </div>
      </div>
    </>
  );
};

export default Trending;
