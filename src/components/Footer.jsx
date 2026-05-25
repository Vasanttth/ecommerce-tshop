import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <div className='mainfoot'>
        <div className='foot'>
            <h3>T SHOP</h3>
            <br />
            <p>info@tshop.com</p>
            <p>Tel:123-456-7890</p>
        </div>
        <div className='footerright'>
        <div>
            <h3>Shop</h3>
            <br />
            <p>new</p>
            <p>Men</p>
            <p>Women</p>
        </div>
        <div>
            <h3>Our Store</h3>
            <br />
            <p>About Us</p>
            <p>Subscribe</p>
            <p>FAQ</p>
        </div>
        <div>
            <h3>Terms & Conditions</h3>
            <br />
            <p>Store policy</p>
            <p>Shipping & Returns</p>
            <p>Payment Methods</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer