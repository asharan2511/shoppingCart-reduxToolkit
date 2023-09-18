import React, { useEffect, useState } from "react";
import "./products.css";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispacth = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (e) => {
    dispacth(add(e));
  };
  return (
    <div className="products">
      {products.map((i) => (
        <div className="card" key={i.id}>
          <img src={i.image} alt="" />
          <h4 style={{ backgroundColor: "white" }}>{i.title}</h4>
          <h3 style={{ backgroundColor: "white" }}>{i.price}</h3>
          <button className="btn" onClick={() => handleAdd(i)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
