import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footerDiv}>
      <div className={styles.footerText}>
        <h3>Bare</h3>
        <p>Time to write some more things just to fill up space. Maybe something about how the company was founded and a really touching story to go with it. I honestly have no idea what to say. How's the weather looking? That should be enough right? Let me check </p>
      </div>
      <div className={styles.footerLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="cart">Cart</NavLink>
        <a href="https://github.com/ImmaCheetah" target="blank">Github</a>
      </div>
    </footer>
  )
}