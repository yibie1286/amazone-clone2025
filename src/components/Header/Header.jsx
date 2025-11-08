import React, { useContext } from "react";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider"; // ✅ import context
import { auth } from "../../Utility/firebase";

const Header = () => {
  // ✅ Access basket state from global context
  const [{user, basket }] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, item) => {
  return item.amount + amount
}, 0)

  return (
    <section className={styles.headerWrapper}>
      <header className={styles.header}>
        {/* Left: Logo and Delivery Info */}
        <div className={styles.headerLeft}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              className={styles.headerLogo}
            />
          </Link>
          <div className={styles.headerDelivery}>
            <FaMapMarkerAlt className={styles.headerIcon} />
            <div>
              <p className={styles.headerDeliveryText}>Delivery to</p>
              <span className={styles.headerDeliveryCountry}>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className={styles.headerSearch}>
          <select className={styles.headerSearchSelect}>
            <option value="all">All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className={styles.headerSearchInput}
          />
          <button className={styles.headerSearchIcon}>
            <FaSearch />
          </button>
        </div>

        {/* Right: Language, Account, Orders, and Cart */}
        <div className={styles.headerRight}>
          {/* Language Selector */}
          <div className={styles.headerOption}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              className={styles.headerFlag}
            />
            <select className={styles.headerSelect}>
              <option value="EN">EN</option>
            </select>
          </div>

          {/* Sign In / Account */}
<Link to={user ? "/" : "/auth"} className={styles.headerOption}>
  <div>
    {user ? (
      <>
        <p>Hello {user.email.split("@")[0]}</p>
       <span onClick={() => auth.signOut()}>Sign Out</span>

      </>
    ) : (
      <>
        <p>Hello, Sign In</p>
        <span>Account & Lists</span>
      </>
    )}
  </div>
</Link>


          {/* Returns / Orders */}
          <Link to="/orders" className={styles.headerOption}>
            <p className={styles.headerOptionText}>Returns</p>
            <span className={styles.headerOptionBold}>& Orders</span>
          </Link>

          {/* ✅ Cart — shows dynamic basket count */}
          <Link to="/cart" className={`${styles.headerOption} ${styles.headerCart}`}>
            <FaShoppingCart className={styles.headerCartIcon} />
            <span className={styles.headerCartCount}>
              {totalItems}
            </span>
          </Link>
        </div>
      </header>

      {/* Lower header (imported) */}
      <LowerHeader />
    </section>
  );
};

export default Header;
