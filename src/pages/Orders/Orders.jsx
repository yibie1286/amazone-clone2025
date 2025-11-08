import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Layout from "../../components/Layout/Layout"; // ✅ make sure this exists
import classes from "./Orders.module.css"; // ✅ optional if you have CSS
import ProductCard from "../../components/product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const ordersRef = collection(db, "users", user.uid, "orders");
    const ordersQuery = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
      const fetchedOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Snapshot received:", fetchedOrders);
      setOrders(fetchedOrders);
    });

    return () => unsubscribe();
  }, [user]); // ✅ only one dependency array

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && <div style={{padding: "20px"}}>you don't have orders yet.</div>}
          {/* -- ordered items -- */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
