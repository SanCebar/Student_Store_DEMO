import { Link } from "react-router-dom"
import "./ProductPreview.css"

const defaultCoverImg = "https://images.unsplash.com/photo-1516009086893-4b3561b27fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"

export default function ProductPreview({ product = {} }) {
    
    return (
        <Link className="product-preview-container" to={`/shop/products/${product.id}`}>
            <div className="product-preview-cover" 
                style={{
                    backgroundImage: `url(${product.image || defaultCoverImg})`
                }}
            >
            </div>

            <div className="product-preview-body">
                <div className="product-preview-title">
                    <h1>{product.name}</h1>
                </div>
                <div className="product-preview-description">
                    <p>{product.description.substring(0, 80) + "..."}</p>
                </div>
            </div>

            <div className="product-preview-footer">
               <span className="product-price">
                   <p>$ {product.price}</p>
                </span>
            </div>
        </Link>
    )
}