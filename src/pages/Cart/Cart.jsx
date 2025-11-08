import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../components/Currencyformat/Currencyformat";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  // ✅ Calculate subtotal with quantity
  const total = basket?.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        
        {/* ✅ LEFT SIDE: Basket Items */}
        <div className={classes.cartLeft}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart 😔</p>
          ) : (
            basket.map((item, i) => ( 
              <section key={i} className={classes.productRow}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                {/* ✅ Show Quantity */}
                <div className={classes.quantityControls}>
                  <button className={classes.btn} onClick={() => increment(item)}>
                  <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item.id)}>

                  <IoIosArrowDown size={20} />
                  </button>
                </div>
           
              </section>
            ))
          )}
        </div>

        {/* ✅ RIGHT SIDE: Subtotal Box */}
        {basket?.length !== 0 && (
          <div className={classes.cartRight}>
            <div>
              <p>
                Subtotal ({basket?.length} {basket?.length === 1 ? "item" : "items"})
              </p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>

            <Link to="/payment" className={classes.subtotal}>
              Continue to checkout
            </Link>
          </div>
        )}

      </section>
    </Layout>
  );
}

export default Cart;
