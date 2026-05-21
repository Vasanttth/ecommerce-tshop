import React from 'react'
import "./ProductDetail.css"


const About = () => {
  return (
    <div className='mainCard'>
        
        <div className='prodimg'>
            <img src="https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_725,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg" alt="" />
        </div>
        <div className='prdDetails'>
            <h2>im a product</h2>
            <p className='price'>Price:₹500</p>
            <p className='desc'>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords.
                 Write your own description instead of using manufacturers' copy.</p>
             <label class="qty-label">Quantity *</label>
  <div class="qty-box">
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>

  <button class="btn-cart">Add to Cart</button>
  <button class="btn-buy">Buy Now</button>     
            

        </div>
    </div>
  )
}

export default About