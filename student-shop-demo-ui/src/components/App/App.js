import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Home from '../Home/Home';
import Product from '../Product/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/shop")
        const products = res?.data?.products
        if (products) {
          setProducts(products)
        }
      } catch(err) {
        console.log({ err })
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;