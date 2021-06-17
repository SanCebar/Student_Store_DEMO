import { useState, useEffect } from 'react';
import axios from "axios"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
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
      <Navbar />
      <Home products={products}/>
    </div>
  );
}

export default App;