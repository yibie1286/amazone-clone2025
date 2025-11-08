import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/Loader/Loader"; // Import the Loader component

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false on error
      });
  }, [categoryName]);

  return (
    <Layout>
      <section style={{ padding: "30px" }}>
        <h1>Results</h1>
        <h2>Category / {categoryName}</h2>
        <div className={classes.container}>
          {loading ? <Loader /> : results.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;