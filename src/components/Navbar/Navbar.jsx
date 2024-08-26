import styles from "./Navbar.module.css";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function Navbar({ cartQuantity }) {
  return (
    <nav>
      <h1 className={styles.shopName}>Bare</h1>
      <NavLink to="/">
        <button data-testid='homeLink' className={styles.navBtn}>Home</button>
      </NavLink>
      <NavLink to="shop">
        <button data-testid='shopLink' className={styles.navBtn}>Shop</button>
      </NavLink>
      <NavLink to="cart">
        <button data-testid='cartLink' className={styles.navBtn}>Cart {cartQuantity === 0 ? '' : cartQuantity}</button>
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  cartQuantity: PropTypes.number,
};