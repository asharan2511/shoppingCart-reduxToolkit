import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dispacth = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemove = (e) => {
    dispacth(remove(e));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((i) => (
          <div className="products" key={i.id}>
            <img src={i.image} alt="" />
            <h3>{i.title}</h3>
            <h4>{i.price}</h4>
            <button className="btn" onClick={() => handleRemove(i.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
