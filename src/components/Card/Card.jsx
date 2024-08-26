import styles from "./Card.module.css";
import AddToCart from "../AddToCart/AddToCart";

export default function Card({ title, price, imgUrl, id }) {
  return (
    <div className={styles.itemCard}>
      <h2 className={styles.itemTitle}>{title}</h2>
      <img src={imgUrl} alt="Product" className={styles.itemImage} />
      <h3 className={styles.itemPrice}>${price}</h3>
      <AddToCart id={id} title={title} price={price} imgUrl={imgUrl} />
    </div>
  );
}
