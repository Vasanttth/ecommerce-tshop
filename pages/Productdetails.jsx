import React, { useEffect } from "react";
import "./ProductDetail.css";
import { useLocation, useParams } from "react-router-dom";

const Productdetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const data = state;

  // ✅ FIX: scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <h2>No Product Selected</h2>;
  }

  return (
    <div className="mainCard">
      <div className="prodimg">
        <img src={data.img} alt={data.name} />
      </div>

      <div className="prdDetails">
        <h2>{data.name}</h2>
        <p className="price">{data.price}</p>
        <p className="desc">{data.description}</p>

        <label className="qty-label">Quantity *</label>
        <div className="qty-box">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button className="btn-cart">Add to Cart</button>
        <button className="btn-buy">Buy Now</button>
      </div>
    </div>
  );
};

export default Productdetails;
