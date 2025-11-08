import React from "react";
import { categoryInfos } from "./catagoryfullinfo";
import CategoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";

const Catagory = () => {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Catagory;
