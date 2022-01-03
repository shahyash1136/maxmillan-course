import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useContext(CartContext);
  const hasIteam = cartData.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartData.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartData.addItem({ ...item, amount: 1 });
  };
  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartData.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cartData.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasIteam}
        {hasIteam && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
