import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="product_info">
          <p className="product_title">{title}</p>
          <p className="product_price">Rs.{price}</p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt={id} />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
