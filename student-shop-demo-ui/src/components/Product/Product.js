import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Hero from "../Hero/Hero";
import "./Product.css";
import defaultImg from "./sea turtle.gif"

const defaultProductImg = defaultImg
  // "https://images.unsplash.com/photo-1516009086893-4b3561b27fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";

export default function Product({ onAdd }) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(
          `http://localhost:3001/shop/products/${productId}`
        );
        if (res?.data?.product) {
          setProduct(res.data.product);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Product not found.");
      }

      setIsLoading(false);
    };

    fetchProductById();
  }, [productId]);

  const renderProductContent = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return (
        <>
          <h1>Error</h1>
          <p className="error">{String(error)}</p>
        </>
      );
    }

    return (
      <>
        <h1>{product.name}</h1>

        <div className="product-body">{product.description}</div>

        <div className="product-footer">
          <span className="price"><p>${product?.price?.toFixed(2)}</p></span>
          <button onClick={() => onAdd(product)} >Add to Cart</button>
        </div>
        
      </>
    );
  };

  return (
    <div className="product-container">
      <div className="product-cover" > 
        <img alt="" src={product.image || defaultProductImg} />
      </div>
      <div className="product-content">{renderProductContent()}</div>
    </div>
  );
}
