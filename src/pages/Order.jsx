import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    axios
      .get(`https://orderservice-ir1z.onrender.com${user.id}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  if (!user) {
    return <h2 style={{ padding: "30px" }}>Please login first</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <h3>No orders found</h3>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ borderBottom: "1px solid #ddd", padding: "20px 0" }}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.totalAmount}</p>
            <p>Date: {order.orderDate}</p>

            {order.items.map((item) => (
              <div key={item.id}>
                <p>{item.productName} - ₹{item.price} × {item.quantity}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;