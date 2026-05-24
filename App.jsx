import React from 'react'
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Footer from './components/footer';
import Productdetails from './pages/Productdetails';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/productDetails/:id" element={<Productdetails />} />
        <Route path="/product/:id" element={<Productdetails/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
