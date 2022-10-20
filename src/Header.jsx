import React, { useContext, useState } from "react";
import Cart from "./Cart";
import { shopContext } from "./ShopContext";

function Header() {
  const [cart, showCart] = useState(false);

  const [state, dispatch] = useContext(shopContext);

  return (
    <>
      {cart && <Cart showCart={showCart} />}
      <div className="header">
        <h1>Our Store</h1>

        <i onClick={() => showCart(true)} className="fa-solid fa-cart-shopping">
          {" "}
          <span className="cart">{state.basket.length}</span>
        </i>
      </div>
    </>
  );
}

export default Header;
