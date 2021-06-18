import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css"


export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="sidebar">
                <Link to="#" className="shopping-cart">
                    <AiIcons.AiOutlineShoppingCart onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="nav-menu-items" onClick={showSidebar} >
                    <li className="navbar-toggle">
                        <Link to="#" className="shopping-cart">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className="nav-text">
                        <h2><span class="shopping-cart-header"><AiIcons.AiOutlineShoppingCart/></span>Shopping Cart</h2>
                    </li>
                    <li className="nav-text">
                        <p>Here is where all your orders will be displayed!
                            Add as many items as you like to support the store. 
                            The chicken nugget is particularly popular right now.
                        </p>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}