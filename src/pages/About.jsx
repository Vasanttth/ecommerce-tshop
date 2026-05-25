import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>Welcome to T SHOP</h1>
        <p>
          Fashion is more than clothing — it's a way to express confidence,
          personality, and individuality. At T SHOP, we bring trendy,
          comfortable, and affordable fashion to everyone.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          T SHOP was created with a simple vision: to make stylish clothing
          accessible to everyone. From classic everyday essentials to modern
          streetwear-inspired designs, we carefully curate products that combine
          comfort, quality, and style.
        </p>
      </div>

      <div className="about-section">
        <h2>Fashion Trends in 2026</h2>
        <p>
          The fashion industry continues to embrace sustainability, oversized
          silhouettes, minimalist designs, and versatile wardrobe essentials.
          Graphic tees, neutral colors, and relaxed fits remain some of the
          most popular trends among fashion enthusiasts worldwide.
        </p>

        <p>
          At T SHOP, we stay updated with the latest trends while ensuring that
          every product delivers premium comfort and durability.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose T SHOP?</h2>

        <ul>
          <li>✔ Premium quality fabrics</li>
          <li>✔ Trendy and modern designs</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Comfortable everyday wear</li>
          <li>✔ Fast and reliable shopping experience</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower people through fashion by offering clothing
          that makes them feel confident and comfortable. We believe everyone
          deserves access to stylish apparel without compromising quality or
          budget.
        </p>
      </div>

      <div className="about-footer">
        <h2>Join the T SHOP Community</h2>
        <p>
          Explore our latest collections, discover new styles, and become part
          of a growing fashion community that values creativity, confidence,
          and self-expression.
        </p>
      </div>

    </div>
  );
};

export default About;