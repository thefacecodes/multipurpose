import React, { useContext, useEffect, useRef, useState } from "react";
import loader from "./loading.png";
import { useNavigate, useParams } from "react-router-dom";
// import { shopContext } from "./ShopContext";
import Header from "./Header";
// import Cart from "./Cart";
// import { shopContext } from "./ShopContext";

export default function Product({ children }) {
  const [product, setProduct] = useState(null);
  const prodImage = useRef("");

  const navigate = useNavigate();

  // const [{ basket }, dispatch] = useContext(shopContext);

  // const { title, price, description, thumbnail, images} = product;
  let location = useParams();
  const { id } = location;
  console.log(location);
  useEffect(() => {
    // fetchItem();
    fetch(`https://dummyjson.com/products/${id}`)
      .then((resp) => resp.json())
      // .then((data) => console.log(data))
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
    // console.log(match);
  }, []);

  const addToCart = (product) => {
    const newItem = {
      name: product.title,
      price: product.price,
      image: product.thumbnail,
    };
    // dispatch({ type: "ADD", payload: newItem });
  };

  const swapImage = (e) => {
    const thumbnail = prodImage.current;
    const clickedImage = e.target.src;
    thumbnail.src = clickedImage;
    console.log(clickedImage);
    console.log(thumbnail);
  };

  const goBack = () => {
    navigate(-1);
  };
  // const fetchItem = async () => {
  //   const data = await fetch(`https://dummyjson.com/products/${id}`);
  //   const response = await data.json();
  //   console.log(response);
  //   setProduct(response);
  // };
  if (product) {
    return (
      <>
        {/* <Header /> */}
        <div className="product">
          <button onClick={goBack}>Go Back</button>

          <div className="item">
            <div className="prod-images">
              <div className="thumbnail">
                <img ref={prodImage} src={product.thumbnail} alt="" />
              </div>

              <div className="more-image">
                {product.images.map((item) => (
                  <img onClick={swapImage} src={item} alt="`" />
                ))}
                {/* <img src={product.images[0]} alt="" />
              <img src={product.images[1]} alt="" />
              <img src={product.images[2]} alt="" />
              <img src={product.images[3]} alt="" /> */}
              </div>
            </div>
            <div className="product-data">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              {/* <h3>Quantity: 0</h3> */}
              <h3>Price: ${product.price}</h3>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="news">
        <div className="pre-loader">
          <img src={loader} alt="" />
        </div>
      </div>
    );
  }
}
