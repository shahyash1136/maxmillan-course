import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const cartData = useContext(CartContext);
  let numberOfItem = cartData.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsActive ? styles.bump : ""}`;
  const { items } = cartData;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsActive(true);
    let timer = setTimeout(() => {
      setBtnIsActive(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
