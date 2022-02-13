import React from "react";

import "./cart-item.scss";

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  console.log(imageUrl);
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{price}</span>
        <span className="price">
          {quantity} x {name}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
