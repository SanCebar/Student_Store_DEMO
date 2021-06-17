import Hero from "../Hero/Hero"
import "./About.css"

const aboutBgImage = 
    "https://images.unsplash.com/photo-1578757089397-a617d290613a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

export default function AboutPage () {
    return (
        <div className="about">
            <Hero bgImage={aboutBgImage}/>
            <h1>About the Shopp</h1>
            <p>the Shopp just launched!</p>
            <p>Please browse our collection and buy whatever speaks to you.</p>
        </div>
    )
}