import React from "react";
import classes from "./catagory.module.css";
import {Link} from "react-router-dom";

const CategoryCard = ({ data }) => {
   console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}> {/* ✅ Use dynamic link instead of string */}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} /> {/* ✅ Added alt text */}
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
