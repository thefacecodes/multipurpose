import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "./ShopContext";

export const CartItem = ({ id, thumbnail, price, title }) => {
  const [state, dispatch] = useContext(shopContext);

  const removeItem = (e) => {
    console.log(e.target.id);
    const removeID = {
      id: parseInt(id),
      price: price,
    };
    dispatch({ type: "REMOVE", payload: removeID });
  };

  const style = {
    all: "unset",
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  };

  return (
    <div className="cart-item" key={id}>
      {/* <Link style={style} to={`/shop/${id}`}> */}
      <img src={thumbnail} alt="" />
      {/* </Link> */}
      <div className="cart-details">
        <Link style={style} to={`/shop/${id}`}>
          <h3>{title}</h3>
        </Link>
        <h4>${price}</h4>
        <button id={id} onClick={removeItem}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
