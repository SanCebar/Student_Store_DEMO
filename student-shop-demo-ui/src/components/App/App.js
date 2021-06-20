import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import About from '../About/About';
import Home from '../Home/Home';
import Product from '../Product/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [productRows, setProductRows] = useState([])
  const [cart, setCart] = useState({})

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

  const onAdd = (product) => {
    const exist = productRows.find(x => x.id === product.id)
    if (exist) {
      setProductRows(
        productRows.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setProductRows([...productRows, {...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = productRows.find(x => x.id === product.id)
    if (exist.qty === 1) {
      setProductRows(productRows.filter( x => x.id !== product.id ))
    } else {
      setProductRows(
        productRows.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="sidebar-panel">
          <Sidebar countCartItems={productRows.length} onAdd={onAdd} onRemove={onRemove} productRows={productRows}/>
        </div>
        <div className="webpage-panel">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} onAdd={onAdd}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/products/:productId" element={<Product onAdd={onAdd} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;