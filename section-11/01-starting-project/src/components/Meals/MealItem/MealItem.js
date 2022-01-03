import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.css";
import MealItemFrom from "./MealItemFrom";
const MealItem = (props) => {
  const cartData = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartData.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
