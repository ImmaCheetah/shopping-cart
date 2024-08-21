import styles from "./Checkout.module.css";

export default function Checkout({ total }) {
  return (
    <div className={styles.checkoutDiv}>
      <p className={styles.checkoutText}>Here is all your product totals and stuff. That's not really necessary for me to say but I need a way to fill this space up.</p>
      <div className={styles.checkoutTotalsDiv}>
        <h5>Subtotal: ${total}</h5>
        <h5>Shipping: FREE</h5>
        <h4>Total: ${total}</h4>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
}
