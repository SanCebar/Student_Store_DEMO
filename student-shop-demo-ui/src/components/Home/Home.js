import ProductPreview from "../ProductPreview/ProductPreview"
import Hero from "../Hero/Hero"
import "./Home.css"

const heroBgImage = 
    //"./ryoji-iwata-unsplash.jpg"
    "https://images.unsplash.com/photo-1603205431689-45f028d17469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"

export default function Home ({ products = [] }) {
    return (
        <div className="home">
            <Hero bgImage={heroBgImage} />
            
            <div className="feed">
                {products.map(product => (
                    <ProductPreview product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}