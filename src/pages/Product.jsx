import React, { useEffect, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import productApi from "../api/productApi";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productApi
      .get("/api/products")
      .then((res) => {
        console.log("Products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleClick = (shirt) => {
    navigate(`/productDetails/${shirt.id}`, { state: shirt });
  };

  return (
    <div>
      <div className="cont">
        {products.map((shirt) => (
          <div className="p1" key={shirt.id} onClick={() => handleClick(shirt)}>
            <img src={shirt.imageUrl} alt={shirt.name} />
            <p>{shirt.name}</p>
            <p>₹{shirt.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;