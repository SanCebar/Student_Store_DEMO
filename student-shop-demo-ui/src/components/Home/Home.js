import ProductPreview from "../ProductPreview/ProductPreview"
import Hero from "../Hero/Hero"
import "./Home.css"

const heroBgImage = 
    "https://images.unsplash.com/photo-1592868787763-acee4cbc7019?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    // "https://images.unsplash.com/photo-1603205431689-45f028d17469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"

export default function Home ({ products = [] }) {
    return (
        <div className="home">
            <Hero bgImage={heroBgImage} />
            
            <div className="feed">
                <h1>Available Items</h1>
                <div className="feed-products">
                    {products.map(product => (
                        <ProductPreview product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}