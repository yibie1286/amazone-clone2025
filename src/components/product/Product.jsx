import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // ✅ Make sure you have this component
import classes from './product.module.css';
import Loader from "../Loader/Loader"; // Import the Loader component

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <section className={classes["products-container"]}>
      {loading ? <Loader /> : products.map((singleProduct) => (
        <ProductCard
          product={singleProduct}
          key={singleProduct.id}
          renderAdd={true}
        />
      ))}
    </section>
  );
};

export default Product;