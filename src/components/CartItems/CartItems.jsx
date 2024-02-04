import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="format">
                <img src={e.id} alt="" className="cart-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity">{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
