import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import CartActivity from "../CartActivity/CartActivity";
import "./Sidebar.css"


export default function Sidebar({ productRows, onAdd, onRemove, countCartItems }) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="sidebar">
                <div className="shopping-cart">
                    <AiIcons.AiOutlineShoppingCart onClick={showSidebar} />
                    {countCartItems? (
                        <button className="badge">{countCartItems}</button>
                        ):('') 
                    }
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <div className="shopping-cart" onClick={showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </div>
                    </li>
                    <li className="nav-text">
                        <h2><span className="shopping-cart-header"><AiIcons.AiOutlineShoppingCart/></span>Shopping Cart</h2>
                    </li>
                    <li className="nav-text">
                        {productRows.length === 0 && <span>Cart is Empty</span>}
                    </li>
                    <li><CartActivity productRows={productRows} onAdd={onAdd} onRemove={onRemove} /></li>
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}