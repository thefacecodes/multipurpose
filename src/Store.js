import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";
// import product from "./products.json"
import loader from "./loading.png";
import { shopContext } from "./ShopContext";
import ShopItem from "./ShopItem";

function Store({ children }) {
  const [items, setItems] = useState([]);

  // const ContextValue = useContext(shopContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((data) => setItems(data.products))
      .catch((error) => console.log(error));
  }, []);

  // const [{ basket }, dispatch] = useContext(ContextHead);

  // if (cart) {
  //   return (
  //     <div className="store">
  //       <Cart />
  //     </div>
  //   );
  // }

  const defaultState = {
    basket: [],
    totalAmount: 0,
  };

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      console.log(state);
      const newBasket = [...state.basket, action.payload];
      const prices = newBasket.map(item => item.price)
      console.log(prices);

      return {
        ...state,
        basket: newBasket,
        
        totalAmount: prices.reduce((item, price) => (item + price), 0),
      };
    }

    if (action.type === "REMOVE") {
      console.log(state);
      const newBasket = state.basket.filter(item => item.id !== action.payload.id);
      console.log("New Price", newBasket.reduce((item, price) => (item.price + price), 0));
      const prices = newBasket.map(item => item.price)
      console.log(prices);
      
  
      return {
        ...state,
        basket: newBasket,
        totalAmount: prices.reduce((item, amount) => (item + amount), 0)
      };
    }

    // if (action.type === "REMOVE") {
    //   console.log(state);
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.payload.id),
    //     totalAmount: state.basket.reduce((item, price) => (item.price + price), 0),
    //     // totalAmount: ,
    //   };
    // }
  };

  // if (items) {
  return (
    <shopContext.Provider value={useReducer(reducer, defaultState)}>
      <div className="store">
        <Header />

        <div className="items">
          {items.map((product) => (
            <ShopItem
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      </div>
    </shopContext.Provider>
  );
  // } else {
  //   return (
  //     <div className="news">
  //       <div className="pre-loader">
  //         <img src={loader} alt="" />
  //       </div>
  //     </div>
  //   );
  // }
}

export default Store;
