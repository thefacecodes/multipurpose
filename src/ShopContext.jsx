import React, { useReducer } from "react";

export const shopContext = React.createContext();

const defaultState = {
  basket: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(state);
    const newBasket = [...state.basket, action.payload];
    console.log("New Price", newBasket.reduce((item, price) => (item.price + price), 0));



    return {
      ...state,
      basket: newBasket,
      // totalAmount: newBasket.reduce((item, amount) => (item.price + amount), 0),
    };
  }

  if (action.type === "REMOVE") {
    console.log(state);
    const newBasket = state.basket.filter(item => item.id === action.payload.id);
    console.log("New Price", newBasket.reduce((item, price) => (item.price + price), 0));

    

    return {
      ...state,
      basket: newBasket,
      totalAmount: newBasket.reduce((item, amount) => (item.price + amount), 0)
    };
  }
};

// default shopContext;

// export const ContextHead = ({ children }) => {
//   <shopContext.Provider value={useReducer(reducer, defaultState)}>
//     {children}
//   </shopContext.Provider>;
// };
