import React, { useEffect, useState } from "react";
import "./productdetails.css";
import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import cartApi from "../api/cartApi";
import orderApi from "../api/orderApi";

const Productdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    productApi
      .get(`/api/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
      });
  }, [id]);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedInUser) {
      alert("Please login first");
      return;
    }

    const cartItem = {
      userId: loggedInUser.id,
      productId: data.id,
      productName: data.name,
      size: data.size,
      color: data.color,
      imageUrl: data.imageUrl,
      price: data.price,
      quantity: quantity,
    };

    cartApi
      .post("/add", cartItem)
      .then(() => {
        alert("Product added to cart!");
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
        alert("Failed to add product to cart");
      });
  };

  const buyNow = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedInUser) {
      alert("Please login first");
      return;
    }

    const order = {
      userId: loggedInUser.id,
      totalAmount: data.price * quantity,
      items: [
        {
          productId: data.id,
          productName: data.name,
          size: data.size,
          color: data.color,
          imageUrl: data.imageUrl,
          price: data.price,
          quantity: quantity,
        },
      ],
    };

    orderApi
      .post("/place", order)
      .then(() => {
        alert("Order placed successfully!");
      })
      .catch((err) => {
        console.error("Error placing order:", err);
        alert("Failed to place order");
      });
  };

  if (!data) {
    return <h2 style={{ padding: "30px" }}>Loading Product...</h2>;
  }

  return (
    <div className="mainCard">
      <div className="prodimg">
        <img src={data.imageUrl} alt={data.name} />
      </div>

      <div className="prdDetails">
        <h2>{data.name}</h2>
        <p className="price">₹{data.price}</p>
        <p className="desc">{data.description}</p>

        <p>Size: {data.size}</p>
        <p>Color: {data.color}</p>
        <p>Material: {data.material}</p>

        <label className="qty-label">Quantity *</label>

        <div className="qty-box">
          <button onClick={decreaseQty}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button className="btn-cart" onClick={addToCart}>
          Add to Cart
        </button>

        <button className="btn-buy" onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Productdetails;