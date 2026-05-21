import React from "react";
import "./product.css"
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import API from "../api/api";

const Product = () => {
const products = [
  {
    id: 1,
    img: "https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg",
    name: "Classic White T-Shirt",
    price: "₹300",
    description: "Soft and breathable classic white tee perfect for everyday wear."
  },
  {
    id: 2,
    img: "https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg",
    name: "Black Designer Tee",
    price: "₹350",
    description: "Premium black tee with a stylish designer print for a bold look."
  },
  {
    id: 3,
    img: "https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg",
    name: "Red Printed T-Shirt",
    price: "₹399",
    description: "Vibrant red tee with a modern print suitable for casual outings."
  },
  {
    id: 4,
    img: "https://static.wixstatic.com/media/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg",
    name: "Blue Oversized Tee",
    price: "₹450",
    description: "Comfortable oversized tee with a relaxed blue tone and soft fabric."
  },
  {
    id: 5,
    img: "https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg",
    name: "Green Sport T-Shirt",
    price: "₹320",
    description: "Lightweight sporty green tee ideal for workouts and daily wear."
  },
  {
    id: 6,
    img: "https://static.wixstatic.com/media/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg",
    name: "Grey Minimal Tee",
    price: "₹380",
    description: "Minimalistic grey tee with a clean and modern design."
  },
  {
    id: 7,
    img: "https://static.wixstatic.com/media/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg",
    name: "Yellow Summer T-Shirt",
    price: "₹420",
    description: "Bright yellow tee designed for summer comfort with airy fabric."
  },
  {
    id: 8,
    img: "https://static.wixstatic.com/media/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg",
    name: "Streetwear Graphic Tee",
    price: "₹520",
    description: "Trendy streetwear tee with eye-catching graphic artwork."
  },
  {
    id: 9,
    img: "https://static.wixstatic.com/media/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg/v1/fill/w_298,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg",
    name: "Black Oversized T-Shirt",
    price: "₹480",
    description: "Soft oversized black tee offering a stylish and relaxed silhouette."
  },
  {
    id: 10,
    img: "https://static.wixstatic.com/media/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg/v1/fill/w_298,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg",
    name: "Casual Cotton Tee",
    price: "₹300",
    description: "Everyday cotton tee with a soft feel and comfortable fit."
  }
];

const navigate = useNavigate()
const handleClick = (shirt)=>{navigate(`/productDetails/${shirt.id}`,{state:shirt})} 



  return (
    <div>
      
      <div className="cont">
        { products.map((shirt)=>(
        <div className="p1" key={shirt.id} onClick={()=>handleClick(shirt)}>
          <img
            src={shirt.img}
            alt=""
          />
          <p>{shirt.name}</p>
          <p>{shirt.price}</p>
        </div>))}
      </div>
    </div>



  );
};

export default Product;
