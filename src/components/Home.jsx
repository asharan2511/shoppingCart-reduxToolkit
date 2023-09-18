import React, { useEffect, useState } from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <h1 className="heading">Welcome to the redux Toolkit Store</h1>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
