import { NavLink } from "react-router-dom"

export default function Navbar({cartQuantity}) {

    return (
        <nav>
          <h1>Store Name</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart {cartQuantity}</NavLink>
        </nav>
    )
}