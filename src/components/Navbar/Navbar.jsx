import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ cartQuantity }) {
  return (
    <nav>
      <h1 className={styles.shopName}>Store Name</h1>
      <NavLink to="/">
        <button className={styles.navBtn}>Home</button>
      </NavLink>
      <NavLink to="shop">
        <button className={styles.navBtn}>Shop</button>
      </NavLink>
      <NavLink to="cart">
        <button className={styles.navBtn}>Cart {cartQuantity}</button>
      </NavLink>
    </nav>
  );
}
