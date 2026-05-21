import React from 'react'
import "./Home.css"
import Product from './Product'


const Home = () => {
  return (
    <div>
    <div className = "con">
      <h1>T SHOP</h1>
      
      <h6>There's one for everyone</h6>
    
      <div className='c1'>
      <img src="https://static.wixstatic.com/media/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg/v1/fill/w_298,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/3e/9f/24/3e9f24f02b9539ec72ee243ab27e53ff.jpg" alt="" />
      <img src="https://static.wixstatic.com/media/c837a6_22d6a5b4c57d437c8f2097ab1e29f97f~mv2.jpg/v1/fill/w_298,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_22d6a5b4c57d437c8f2097ab1e29f97f~mv2.jpg" alt="" />
      </div>
    </div>
    <Product/>
    </div>
  )
}

export default Home