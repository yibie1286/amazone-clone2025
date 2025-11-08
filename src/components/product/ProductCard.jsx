import React, { useContext } from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../../components/Currencyformat/Currencyformat';
import classes from '.././product/product.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  // ✅ Access global state and dispatch
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket)

  // ✅ Add to cart handler
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
        description,
      },
    });

    console.log("✅ Added to cart:", title);
  };

  return (
    <div className={`${classes.container} ${flex ? classes.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>({rating.count})</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        {/* ✅ Button calls addToCart function */}

        {renderAdd  &&  <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button> }
    
      </div>
    </div>
  );
}

export default ProductCard;
