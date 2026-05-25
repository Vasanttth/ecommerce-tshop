import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import productApi from "../api/productApi";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productApi.get("")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleClick = (shirt) => {
    navigate(`/productDetails/${shirt.id}`);
  };

  return (
    <div>
      <div className="cont">
        {products.map((shirt) => (
          <div
            className="p1"
            key={shirt.id}
            onClick={() => handleClick(shirt)}
          >
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