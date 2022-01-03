import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems;
    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const exisitingItem = state.items[exisitingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exisitingItem.price;
    let updatedItems;
    if (exisitingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    } else {
      const updatedItem = {
        ...exisitingItem,
        amount: exisitingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
