import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../Hero/Hero"
import "./Product.css"

const defaultProductImg = 
    "https://images.unsplash.com/photo-1516009086893-4b3561b27fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"

export default function Product() {
    const [product, setProduct] = useState({})

    return (
        <div className="product">
            <div className="product-container">
                <div className="product-cover" 
                    style={{
                        backgroundImage: `url(${product.image || defaultProductImg})`
                    }}
                >
                </div>

                <div className="product-content">
                    <h1>{product.name}</h1>

                    <div className="product-body">
                        {product.description}
                    </div>

                    <div className="product-footer">
                        <span className="price">{product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}