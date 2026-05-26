import React, { useEffect, useState } from "react";
import cartApi from "../api/cartApi";
import orderApi from "../api/orderApi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user") || "null");

  const fetchCart = () => {
    if (!loggedInUser) return;

    cartApi
      .get(`/${loggedInUser.id}`)
      .then((res) => {
        console.log("Cart response:", res.data);
        setCartItems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (cartItemId) => {
    cartApi
      .delete(`/remove/${cartItemId}`)
      .then(() => {
        alert("Item removed from cart");
        fetchCart();
      })
      .catch((err) => {
        console.error("Error removing item:", err);
      });
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!loggedInUser) {
      alert("Please login first");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const order = {
      userId: loggedInUser.id,
      totalAmount: totalAmount,
      items: cartItems.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        size: item.size,
        color: item.color,
        imageUrl: item.imageUrl,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    orderApi
      .post("/place", order)
      .then(() => {
        alert("Order placed successfully!");
        return cartApi.delete(`/clear/${loggedInUser.id}`);
      })
      .then(() => {
        setCartItems([]);
      })
      .catch((err) => {
        console.error("Error placing order:", err);
        alert("Failed to place order");
      });
  };

  if (!loggedInUser) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Please Login First</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "20px 0",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.productName}
                style={{
                  width: "120px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />

              <div>
                <h3>{item.productName}</h3>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{item.price * item.quantity}</p>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{totalAmount}</h2>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;