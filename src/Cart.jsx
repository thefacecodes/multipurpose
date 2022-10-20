import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { shopContext } from "./ShopContext";

function Cart({ showCart }) {
  const [state, dispatch] = useContext(shopContext);
  const { basket, totalAmount } = state;

  if (basket.length < 1) {
    return (
      <div className="showcart">
        <i onClick={() => showCart(false)} className="fa-solid fa-xmark"></i>
        <div className="cartList">
          <h2>Your Cart ({basket.length})</h2>
          <h3>No items in cart yet</h3>;
          <div className="subtotal">
            <h4>Total:</h4>
            <h4>${totalAmount}</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="showcart">
      <i onClick={() => showCart(false)} className="fa-solid fa-xmark"></i>
      <div className="cartList">
        <h2>Your Cart ({basket.length})</h2>

        {basket.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            id={item.id}
            price={item.price}
          />
        ))}
        <div className="subtotal">
          <h4>Total:</h4>
          <h4>${totalAmount}</h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
