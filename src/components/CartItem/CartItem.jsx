import styles from "./CartItem.module.css";
import useChangeProductQuantity from "../../Hooks/useChangeProductQuantity";
import PropTypes from 'prop-types';

export default function CartItem({ title, price, totalPrice, imgUrl, deleteItem }) {
  const { productQty, incrementQty, decrementQty, handleChange } =
    useChangeProductQuantity({ title });

    function handleChangeLocal() {
      
    }

  return (
    <div className={styles.cartItemDiv}>
      <div>
        <img src={imgUrl} alt="" className={styles.cartImg} />
      </div>
      <div className={styles.itemInfoDiv}>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <div className={styles.qtyChangeDiv}>
          <button className={styles.changeQtyBtn} onClick={decrementQty}>-</button>
          <input
            className={styles.qtyInput}
            data-testid='qtyInput'
            id="productQty"
            type="number"
            min={1}
            max={99}
            value={productQty}
            onChange={handleChange}
          />
          <button 
            className={styles.changeQtyBtn} 
            onClick={incrementQty}
          >
            +
          </button>
          <button 
            className={styles.deleteBtn} 
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={styles.totalInfoDiv}>
        <h5 
          className={styles.totalInfo} 
          data-testid='totalQty'
        >
          Quantity: {productQty}
        </h5>
        <h5 
          className={styles.totalInfo} 
          data-testid='totalPrice'
        >
          ${totalPrice.toFixed(2)}
        </h5>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};
