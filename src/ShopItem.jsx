import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "./ShopContext";

function ShopItem({
  id,
  thumbnail,
  title,
  description,
  category,
  price,
  discountPercentage,
}) {
  const style = {
    textDecoration: "none",
    color: "black",
  };

  const [state, dispatch] = useContext(shopContext);

  const addToCart = () => {
    // const parent = e.target.parentElement;
    const item = { id: id, thumbnail: thumbnail, title: title, price: price };
    dispatch({ type: "ADD", payload: item });
  };

  return (
    <div key={id}>
      <Link style={style} to={`/shop/${id}`}>
        <img src={thumbnail} alt={title} />
      </Link>
      <div>
        <Link style={style} to={`/shop/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <h3 className="category">Category: {category}</h3>
        <p className="price">
          ${price} -- <span>{discountPercentage}% OFF</span>
        </p>
        <button onClick={addToCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
