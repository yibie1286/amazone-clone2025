import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import "./ProductDetail.module.css";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/Loader/Loader"; // Import the Loader component

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.log("Error fetching product:", err);
        setLoading(false); // Set loading to false on error
      });
  }, [productId]);

  return (
    <Layout>
      {loading ? <Loader /> : product && <ProductCard product={product} flex={true} renderAdd={true} renderDesc={true} />}
    </Layout>
  );
}

export default ProductDetail;